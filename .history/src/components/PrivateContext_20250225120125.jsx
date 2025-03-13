import { createContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState(false);
  const navigate = useNavigate("");
};
