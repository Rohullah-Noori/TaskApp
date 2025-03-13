import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth } from "./PrivateContext";

// function PrivateRoute({ element, ...res }) {
//   const { islogin } = useAuth();
//   return islogin ? (
//     <Route {...res} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// }

// function PrivateRoute({ element, ...res }) {
//   const { islogin } = useAuth();
//   return (
//     <Route {...res} element={islogin ? element : <Navigate to="/login" />} />
//   );
// }

// export default PrivateRoute;

function PrivateRoute=()=>{
  const {islogin}=useAuth();
  return islogin ? <Outlet/> : <Navigate to="/login"/>
}