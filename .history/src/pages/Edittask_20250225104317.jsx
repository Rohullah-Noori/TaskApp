import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../components/TaskContext";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Loader from "../components/Loader";
function Edittask() {
  const { taskId } = useParams();
  const { tasks, updateTask, loading, setIsloading } = useTasks();

  const [taskdata, setTaskdata] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const navigate = useNavigate();
  useEffect(
    function () {
      const toEdit = tasks.find((task) => task.id === Number(taskId));

      if (toEdit) {
        setTaskdata(toEdit.title || "");
        setStartTime(toEdit.startTime || "");
        setEndTime(toEdit.endTime || "");
      }
    },

    [taskId, tasks]
  );

  const handlesave = () => {
    if (!taskdata.trim()) return;
    updateTask(taskId, {
      title: taskdata,
      startTime: startTime ? `2025-01-01T${startTime}:00` : "",
      endTime: endTime ? `2025-01-01T${endTime}:00` : "",
    });
    setIsloading(true);
    setTimeout(() => {
      navigate("/home");
      setIsloading(false);
    }, 1000);
  };

  return (
    <div>
      <Navbar />

      <div className="containerForm">
        <div className="parentContainerForm ">
          <div className="space-y-3">
            <h2 className="heading">Edit task</h2>
            {loading && <Loader />}
            <form action="" className="space-y-3">
              <div className="">
                <label htmlFor="subject" className="text-lg block">
                  Title
                </label>
                <input
                  id="subject"
                  className="input"
                  type="text"
                  value={taskdata}
                  onChange={(e) => setTaskdata(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="start">Start </label>
                <input
                  type="time"
                  id="start"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="end">End</label>
                <input
                  className="input"
                  type="time"
                  id="end"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </form>
            <Button onClick={handlesave} className="btndesign">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edittask;
