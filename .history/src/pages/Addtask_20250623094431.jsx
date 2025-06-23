import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../components/TaskContext";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Addtask() {
  const [task, setTask] = useState("");
  const [stime, setStime] = useState("");
  const [etime, setEtime] = useState("");

  const { addtask, loading, setIsloading } = useTasks();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim() || !stime.trim() || !etime.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
      startTime: `2025-01-01T${stime}:00`,
      endTime: `2025-01-01T${etime}:00`,
    };

    setIsloading(true);
    setTimeout(() => {
      addtask(newTask);
      setTask("");
      setStime("");
      setEtime("");
      navigate("/home");
      setIsloading(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-50">
      <Navbar />

      <main className="flex-grow flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg mt-10 mb-10">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">
            Add Task
          </h1>

          {loading && <Loader />}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Task name"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="start" className="block text-sm font-medium">
                Start Time
              </label>
              <input
                id="start"
                type="time"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={stime}
                onChange={(e) => setStime(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="end" className="block text-sm font-medium">
                End Time
              </label>
              <input
                id="end"
                type="time"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={etime}
                onChange={(e) => setEtime(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-4 font-semibold transition"
            >
              Add to Task List
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Addtask;
