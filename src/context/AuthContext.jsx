import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { onAuthStateChange } from "../firebase";
import { allRoutes, privateRoutesPaths } from "../utils/routes";
import classes from "./AuthContext.module.css";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        onAuthStateChange(async (user) => {
          if (user?.hasOwnProperty("email")) {
            setCurrentUser(user);
            if (pathname === allRoutes.login.path) {
              navigate(allRoutes.home.path);
            }
          } else {
            const isPrivateRoute = privateRoutesPaths.some(
              (route) => route === pathname
            );
            if (isPrivateRoute) {
              navigate(allRoutes.login.path);
            }
          }
        });
      } catch (error) {}
      setIsLoading(false);
    };
    getCurrentUser();
  }, [navigate, pathname]);

  return (
    <AuthContext.Provider value={currentUser}>
      {isLoading ? (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
