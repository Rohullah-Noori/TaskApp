import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Button from "../components/Button";
import { useAuth } from "../components/PrivateContext";
import Footer from "../components/Footer";

function Login() {
  const [message, setMessage] = useState("");
  const [loading, setIsloading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const validusername = "Rohullah";
  const validpassword = "Rohullah";

  function handlesubmit(e) {
    e.preventDefault();
    setIsloading(true);
    setMessage("");
    if (username === validusername && password === validpassword) {
      setTimeout(() => {
        setIsloading(false);
        setMessage("login successfully");

        login();
      }, 1000);
    } else {
      setMessage("Invalid Usrename or Password");
      setIsloading(false);
    }
  }
  return (
    <>
      <Navbar />
      <div className="containerForm">
        <div className="parentContainerForm ">
          <h2 className="heading">Login</h2>
          <p className="p-1 text-red-300">
            User && password = <span className="text-green-300">Rohullah</span>
          </p>
          {loading && <Loader />}
          {message && (
            <div
              className={`${
                message === "login successfully"
                  ? "bg-green-100 text-green-700 border-green-500"
                  : "bg-red-100 text-red-700 border-red-500"
              }`}
            >
              {message}
            </div>
          )}

          <form action="" onSubmit={handlesubmit} className="space-y-4">
            <div className=" space-y-3  ">
              <label
                htmlFor="username"
                className="block text-md font-md text-gray-600"
              >
                Username
              </label>

              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              />
            </div>

            <div className=" space-y-3 ">
              <label
                htmlFor="password"
                className="block text-md font-md text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </div>
            <div className="flex">
              <Button type="submit">Login</Button>
            </div>
          </form>

          <div>
            <h3>
              If dosen`t have account !
              <Link
                to={"/signup"}
                className=" text-blue-400 hover:text-blue-600"
              >
                Sign up
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
