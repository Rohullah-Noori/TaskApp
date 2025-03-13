// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [islogin, setIslogin] = useState(() => {
//     return localStorage.getItem("islogin") === "true";
//   });
//   const navigate = useNavigate();

//   useEffect(
//     function () {
//       localStorage.setItem("islogin", islogin ? "true" : "false");
//     },
//     [islogin]
//   );

//   const login = () => {
//     setIslogin(true);
//     navigate("/home");
//   };

//   const logout = () => {
//     setIslogin(false);
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ login, logout, islogin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // مقدار اولیه را از localStorage دریافت کن
  const [islogin, setIslogin] = useState(() => {
    return localStorage.getItem("islogin") === "true";
  });

  // مقدار را در localStorage ذخیره کن
  useEffect(() => {
    localStorage.setItem("islogin", islogin ? "true" : "false");
  }, [islogin]);

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
