// import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useTasks } from "../components/TaskContext";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
function Home() {
  const { tasks, setTasks, loading, setIsloading } = useTasks();
  // const [loading, setIsloading] = useState(false);
  const [ismodalOpen, setIsmodalOpen] = useState();
  const navigate = useNavigate();
  function Handle(e) {
    e.preventDefault();
    setIsloading(true);
    setTimeout(() => {
      navigate("/addtask");
      setIsloading(false);
    }, 1000);
  }

  const handleEdit = (taskId) => {
    navigate(`/edit-task/${taskId}`);
  };

  const handleDelet = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete this task?");
    if (confirmDelete) {
      const updateTasks = tasks.filter((task) => task.id !== id);
      setTasks(updateTasks);
      alert("Task deleted Successfully");
    }
  };

  useEffect(
    function () {
      console.log("task updated :", tasks);
    },
    [tasks]
  );

  return (
    <div>
      <Navbar />

      <div className="taskContainer">
        <div className="taskinnerContainer mb-10">
          <h1 className="heading">Task List</h1>
          {loading && <Loader />}
          <div className="  justify-center ">
            <ul>
              {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                  <li
                    key={task.id}
                    className={`p-2 border-1 mb-2 border-blue-300 rounded-md ${
                      task.completed ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        setTasks(
                          tasks.map((T) =>
                            T.id === task.id
                              ? { ...T, completed: !T.completed }
                              : T
                          )
                        )
                      }
                      className="cursor-pointer accent-green-400"
                    />
                    {task.title}
                    <div>
                      <strong>Start:</strong>
                      {task.startTime
                        ? new Date(task.startTime).toLocaleString()
                        : "Not set"}
                    </div>
                    <div>
                      <strong>End :</strong>
                      {task.endTime
                        ? new Date(task.endTime).toLocaleString()
                        : ""}
                    </div>
                    <div className="flex justify-center space-x-2">
                      <Button onClick={() => handleEdit(task.id)}>Edit</Button>
                      <Button onClick={() => handleDelet(task.id)}>
                        delete
                      </Button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No tasks available</p> // ✅ این بخش پیش‌فرض
              )}
            </ul>
          </div>
          <>
            <Button onClick={Handle}>Add Task</Button>
          </>
        </div>
      </div>
    </div>
  );
}

export default Home;
