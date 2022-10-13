import React from "react";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const Login = React.lazy(() => import("../pages/Login/Login"));

export const allRoutes = {
  home: {
    path: "/",
    Element: Home,
  },
  login: {
    path: "/login",
    Element: Login,
  },
  register: {
    path: "/register",
    Element: Register,
  },
};

export const privateRoutesPaths = [allRoutes.home.path];
