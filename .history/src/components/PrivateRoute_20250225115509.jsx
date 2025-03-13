import { Navigate, Route } from "react-router-dom";
import { useTasks } from "./TaskContext";

function PrivateRoute({ element, ...res }) {
  const { islogin } = useTasks();
  return (
    <Route {...res} element={islogin ? element : <Navigate to="/logins" />} />
  );
}

export default PrivateRoute;
