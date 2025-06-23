import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./PrivateContext";

export default function PrivateRoute() {
  const { islogin } = useAuth();
  return islogin ? <Outlet /> : <Navigate to="/login" />;
}
