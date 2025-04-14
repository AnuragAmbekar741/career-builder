import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export function generateAccessToken(user: User) {
  return jwt.sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
    expiresIn: "3m",
  });
}

export function generateRefreshToken(user: User) {
  return jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
}
