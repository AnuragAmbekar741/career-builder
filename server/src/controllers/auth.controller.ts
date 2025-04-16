import { Request, Response, RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateAccessToken, generateRefreshToken } from "../auth/token";

const prisma = new PrismaClient();

export const register: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email, password, name } = req.body;

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashed, name },
    });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("[Register Error]", err);
    res
      .status(500)
      .json({ message: "Something went wrong during registration" });
  }
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("[Login Error]", err);
    res.status(500).json({ message: "Something went wrong during login" });
  }
};
