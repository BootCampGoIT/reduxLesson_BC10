import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName:"HomePage" */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Tasks",
    path: "/tasks",
    exact: true,
    component: lazy(() =>
      import("../pages/TasksPage" /* webpackChunkName:"TasksPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Sign Up",
    path: "/signup",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Sign in",
    path: "/signin",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
