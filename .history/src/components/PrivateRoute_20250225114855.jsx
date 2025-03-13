import { useTasks } from "./TaskContext";

function PrivateRoute({ element, ...res }) {
  const { islogin } = useTasks();
  return <div>{}</div>;
}

export default PrivateRoute;
