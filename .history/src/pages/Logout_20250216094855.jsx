import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Logout() {
  const navigate = useNavigate();
  const [loading, setIsloading] = useState(false);
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
