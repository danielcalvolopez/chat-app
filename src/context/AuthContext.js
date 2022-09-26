import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChange } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        onAuthStateChange(async (user) => {
          if (user?.hasOwnProperty("email")) {
            setCurrentUser({ email: user.email });

            navigate("/");
          }
        });
      } catch (error) {}
      setIsLoading(false);
    };
    getCurrentUser();
  }, [navigate]);

  return (
    <AuthContext.Provider value={currentUser}>
      {isLoading ? "Is loading..." : children}
    </AuthContext.Provider>
  );
};
