import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
