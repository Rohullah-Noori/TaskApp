import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Landing() {
  const [loading, setIsloading] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setIsloading(true);
    setTimeout(() => {
      navigate("/home");
      setIsloading(false);
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <div className="flex bg-blue-100  justify-items-center  sm:h-screen justify-center">
        <div className=" text-center mt-15 px-10 sm:px-20 md:px-30 lg:px-40 h-50  ">
          <h2 className="font-bold sm:text-2xl text-blue-500 ">
            Welcome to Task App
          </h2>
          <p className="mt-10">
            The Task App is a simple to-do list application designed for easy
            task management. Users can sign up and log in to access their
            personalized task list. The app allows users to add new tasks with
            descriptions and due dates. Each task can be marked as completed
            using a checkbox. Users can edit or delete tasks as needed. The home
            page displays all tasks in a structured task list format. The app
            features a user-friendly interface built with React and Tailwind
            CSS. Data management is handled efficiently using a backend with PHP
            and MySQL. Security measures ensure user authentication and data
            protection. The app provides a smooth and responsive experience
            across devices.
          </p>
          <div className="mt-10">
            {loading && <Loader />}
            <Button onClick={handleClick}>Go To Task</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
