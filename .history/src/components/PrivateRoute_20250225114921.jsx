import { Route } from "react-router-dom";
import { useTasks } from "./TaskContext";

function PrivateRoute({ element, ...res }) {
  const { islogin } = useTasks();
  return <Route />;
}

export default PrivateRoute;
