import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [islogin, setIslogin] = useState(() => {
    return localStorage.getItem("islogin") === "true" ? true : false;
  });
  const navigate = useNavigate();

  useEffect(
    function () {
      localStorage.setItem("islogin", JSON.stringify(islogin));
    },

    [islogin]
  );

  const login = () => {
    setIslogin(true);
    navigate("/home");
  };

  const logout = () => {
    setIslogin(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, islogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
