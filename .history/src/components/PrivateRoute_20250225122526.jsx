import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./PrivateContext";

// function PrivateRoute({ element, ...res }) {
//   const { islogin } = useAuth();
//   return islogin ? (
//     <Route {...res} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// }

export default PrivateRoute;
