import { Router, Route, RootRoute, Outlet } from "@tanstack/react-router";
import { Index } from "./";
import { Login } from "./login";
import { Signup } from "./signup";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const index = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const login = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const signup = new Route({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});

const routeTree = rootRoute.addChildren([index, login, signup]);

export const router = new Router({ routeTree });
