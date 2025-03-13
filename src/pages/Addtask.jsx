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
  function handlevalue(e) {
    e.preventDefault();
    if (!task.trim() || !stime.trim() || !etime.trim()) {
      return;
    }

    const newtask = {
      id: Date.now(),
      title: task,
      completed: false,
      startTime: stime ? `2025-01-01T${stime}:00` : "",
      endTime: etime ? `2025-01-01T${etime}:00` : "",
    };
    setIsloading(true);
    setTimeout(() => {
      addtask(newtask);
      setTask("");
      setStime("");
      setEtime("");
      navigate("/home");
      setIsloading(false);
    }, 1000);
  }

  return (
    <div>
      <Navbar />
      <div className="containerForm">
        <div className="parentContainerForm ">
          <h1 className="heading">Add Task</h1>
          {loading && <Loader />}
          <form action="" method="get">
            <label htmlFor="Title" className="sm:text-lg">
              Title
            </label>
            <input
              id="Title"
              type="text"
              placeholder="task name"
              className="input mb-2"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <div className="flex flex-col space-y-3">
              <label htmlFor="Start" className=" sm:text-lg">
                Start Time
              </label>
              <input
                value={stime}
                type="time"
                id="Start"
                className="input"
                onChange={(e) => setStime(e.target.value)}
              />
              <label htmlFor="End">End Time</label>
              <input
                type="time"
                id="End"
                className="input"
                value={etime}
                onChange={(e) => setEtime(e.target.value)}
              />
            </div>
          </form>

          <button className="btndesign" onClick={handlevalue}>
            add to task list
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Addtask;
