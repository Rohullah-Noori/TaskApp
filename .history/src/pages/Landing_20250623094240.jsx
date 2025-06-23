import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Landing() {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/home");
      setIsLoading(false);
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between min-h-118 bg-blue-100 overflow-hidden">
        <main className="flex-grow flex justify-center items-center px-6 sm:px-10">
          <div className="max-w-3xl text-center space-y-6">
            <h2 className="font-bold text-2xl sm:text-3xl text-blue-600">
              Welcome to Task App
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The Task App is a simple to-do list application designed for easy
              task management. Users can sign up and log in to access their
              personalized task list. You can add tasks with due dates, mark
              them as complete, edit or delete them. The interface is built with
              React and Tailwind CSS, with secure backend support via PHP and
              MySQL. It’s responsive, fast, and user-friendly on all devices.
            </p>
            {loading && <Loader />}
            <Button onClick={handleClick}>Go To Task</Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
