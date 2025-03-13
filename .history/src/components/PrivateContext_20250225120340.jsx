import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState(false);
  const navigate = useNavigate("");
  const login = () => {
    setIslogin(true);
    navigate("/home");
  };

  const logout = () => {
    setIslogin(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={(login, logout, islogin)}>
      {children}
    </AuthContext.Provider>
  );
};
