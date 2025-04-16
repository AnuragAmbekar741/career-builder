import { Router, Route, RootRoute, Outlet } from "@tanstack/react-router";
import { Login } from "./login";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login,
});

const routeTree = rootRoute.addChildren([loginRoute]);

export const router = new Router({ routeTree });
