import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [islogin, setIslogin] = useState(() => {
    return localStorage.setItem("ïslogin", false);
  });
  const navigate = useNavigate();
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
