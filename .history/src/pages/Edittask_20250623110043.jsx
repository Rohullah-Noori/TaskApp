import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../components/TaskContext";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Button from "../components/Button";

function Edittask() {
  const { taskId } = useParams();
  const { tasks, updateTask, loading, setIsloading } = useTasks();
  const navigate = useNavigate();

  const [taskdata, setTaskdata] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Load task data to edit
  useEffect(() => {
    const toEdit = tasks.find((task) => task.id === Number(taskId));
    if (toEdit) {
      setTaskdata(toEdit.title || "");
      setStartTime(toEdit.startTime?.slice(11, 16) || "");
      setEndTime(toEdit.endTime?.slice(11, 16) || "");
    }
  }, [taskId, tasks]);

  const handlesave = () => {
    if (!taskdata.trim()) return;

    setIsloading(true);
    updateTask(taskId, {
      title: taskdata,
      startTime: startTime ? `2025-01-01T${startTime}:00` : "",
      endTime: endTime ? `2025-01-01T${endTime}:00` : "",
    });

    setTimeout(() => {
      navigate("/home");
      setIsloading(false);
    }, 1000);
  };

  return (
    <div>
      <Navbar />

      {loading && <Loader />}

      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md space-y-4">
          <h2 className="text-center text-2xl font-bold text-blue-600">
            Edit Task
          </h2>

          <div className="space-y-4">
            {/* Task Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={taskdata}
                onChange={(e) => setTaskdata(e.target.value)}
                className="input"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label
                htmlFor="start"
                className="block text-gray-700 font-medium mb-1"
              >
                Start Time
              </label>
              <input
                type="time"
                id="start"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="input"
              />
            </div>

            <div>
              <label
                htmlFor="end"
                className="block text-gray-700 font-medium mb-1"
              >
                End Time
              </label>
              <input
                type="time"
                id="end"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="input"
              />
            </div>

            <Button onClick={handlesave} className="btndesign w-full mt-4">
              Save
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Edittask;
