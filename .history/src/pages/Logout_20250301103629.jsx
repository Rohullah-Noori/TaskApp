import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "../components/PrivateContext";

function Logout() {
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
  const { logout } = useAuth();
  useEffect(
    function () {
      setIsloading(true);
      setTimeout(() => {
        setIsloading(false);
        // navigate("/login");
        logout();
      }, 1000);
    },
    [logout]
  );
  return <div>{loading && <Loader />}</div>;
}

export default Logout;
