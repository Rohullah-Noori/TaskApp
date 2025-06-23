import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useTasks } from "../components/TaskContext";
import * as Dialog from "@radix-ui/react-dialog";
import Footer from "../components/Footer";

function Home() {
  const { tasks, setTasks, loading, setIsloading } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const navigate = useNavigate();

  const openDeleteModal = (id) => {
    setTaskToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(updatedTasks);
    setIsModalOpen(false);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setIsloading(true);
    setTimeout(() => {
      navigate("/addtask");
      setIsloading(false);
    }, 1000);
  };

  const handleEdit = (taskId) => {
    setIsloading(true);
    setTimeout(() => {
      navigate(`/edit-task/${taskId}`);
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    console.log("task updated:", tasks);
  }, [tasks]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-4xl bg-amber-50 rounded-xl shadow-lg p-6 mb-10">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-400">
            Task List
          </h1>

          {loading && <Loader />}

          {tasks && tasks.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="bg-white rounded-xl p-4 shadow-md space-y-2 border border-blue-100"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        setTasks(
                          tasks.map((t) =>
                            t.id === task.id
                              ? { ...t, completed: !t.completed }
                              : t
                          )
                        )
                      }
                      className="cursor-pointer accent-green-500"
                    />
                    <span
                      className={`font-semibold ${
                        task.completed ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Start:</strong>{" "}
                    {task.startTime
                      ? new Date(task.startTime).toLocaleString()
                      : "Not set"}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>End:</strong>{" "}
                    {task.endTime
                      ? new Date(task.endTime).toLocaleString()
                      : "Not set"}
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button onClick={() => handleEdit(task.id)}>Edit</Button>
                    <Button onClick={() => openDeleteModal(task.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No tasks available</p>
          )}

          <div className="mt-8 flex justify-center">
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>

          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-0 flex justify-center items-center">
                <div className="bg-white rounded-xl p-6 shadow-2xl max-w-sm w-full">
                  <h2 className="text-lg font-bold mb-2">Are you sure?</h2>
                  <p className="text-sm text-red-500 mb-4">
                    This action will delete the task permanently.
                  </p>
                  <div className="flex justify-between">
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-300 hover:bg-gray-400 text-black rounded-md"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={confirmDelete}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
