import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
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

  const validUsername = "Rohullah";
  const validPassword = "Rohullah";

  function handleSubmit(e) {
    e.preventDefault();
    setIsloading(true);
    setMessage("");

    if (username === validUsername && password === validPassword) {
      setTimeout(() => {
        setIsloading(false);
        setMessage("Login successfully");
        login();
      }, 1000);
    } else {
      setTimeout(() => {
        setMessage("Invalid username or password");
        setIsloading(false);
      }, 700);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex justify-center items-center bg-blue-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Login
          </h2>

          <p className="text-sm text-gray-500 text-center mb-4">
            Username & Password:{" "}
            <span className="text-green-500 font-medium">Rohullah</span>
          </p>

          {loading && <Loader />}
          {message && (
            <div
              className={`text-sm px-4 py-2 rounded-md border mb-4 ${
                message === "Login successfully"
                  ? "bg-green-100 text-green-700 border-green-400"
                  : "bg-red-100 text-red-700 border-red-400"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
