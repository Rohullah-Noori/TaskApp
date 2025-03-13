import { createContext } from "react";

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
};
