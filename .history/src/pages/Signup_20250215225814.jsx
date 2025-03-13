// import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loader from "../components/Loader";

function Signup() {
  const [loading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit() {
    setIsloading(true);
    setTimeout(() => {
      navigate("/login");
      setIsloading(false);
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <div className="containerForm">
        <div className="parentContainerForm ">
          <h2 className="heading ">Register</h2>
          {loading && <Loader />}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3 mt-15 ">
              <label
                htmlFor="Username"
                className="block text-md font-md text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                className="input"
                {...register("username", { required: "username is required" })}
              />
            </div>
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
            <div className="space-y-3">
              <label
                htmlFor="password"
                className="block text-md font-md text-gray-600"
              >
                password
              </label>
              <input
                type="password"
                className="input"
                {...register("password", {
                  required: "password is required",
                  minLength: { value: 4, message: "min 4 cracter plz" },
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Signup;
