import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "../components/PrivateContext";

function Logout() {
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
  const { Logout } = useAuth();
  useEffect(
    function () {
      setIsloading(true);
      setTimeout(() => {
        setIsloading(false);
        navigate("/login");
      }, 1000);
    },
    [navigate]
  );
  return <div>{loading && <Loader />}</div>;
}

export default Logout;
