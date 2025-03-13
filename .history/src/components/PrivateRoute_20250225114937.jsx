import { Route } from "react-router-dom";
import { useTasks } from "./TaskContext";

function PrivateRoute({ element, ...res }) {
  const { islogin } = useTasks();
  return <Route {...res} element={} />;
}

export default PrivateRoute;
