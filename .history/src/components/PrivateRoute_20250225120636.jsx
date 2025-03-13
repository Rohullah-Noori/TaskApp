import { Navigate, Route } from "react-router-dom";
import { useTasks } from "./TaskContext";
import { useAuth } from "./PrivateContext";

function PrivateRoute({ element, ...res }) {
  const { islogin } = useAuth();
  return (
    <Route {...res} element={islogin ? element : <Navigate to="/login" />} />
  );
}

export default PrivateRoute;
