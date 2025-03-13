// // import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Button from "../components/Button";
// import { useNavigate } from "react-router-dom";
// import Loader from "../components/Loader";
// import { useTasks } from "../components/TaskContext";
// import * as Dialog from "@radix-ui/react-dialog";
// function Home() {
//   const { tasks, setTasks, loading, setIsloading } = useTasks();
//   // const [loading, setIsloading] = useState(false);
//   const [ismodalOpen, setIsmodalOpen] = useState(false);
//   const [tasktoDelet, setTasktoDelet] = useState(null);

//   const opendeletmodal = (id) => {
//     setTasktoDelet(id);
//     setIsmodalOpen(true);
//   };

//   const confirmDelete = () => {
//     const updatetasks = tasks.filter((task) => task.id !== tasktoDelet);
//     setTasks(updatetasks);
//     setIsmodalOpen(false);
//   };

//   const navigate = useNavigate();
//   function Handle(e) {
//     e.preventDefault();
//     setIsloading(true);
//     setTimeout(() => {
//       navigate("/addtask");
//       setIsloading(false);
//     }, 1000);
//   }

//   const handleEdit = (taskId) => {
//     navigate(`/edit-task/${taskId}`);
//   };

//   useEffect(
//     function () {
//       console.log("task updated :", tasks);
//     },
//     [tasks]
//   );

//   return (
//     <div>
//       <Navbar />

//       <div className="taskContainer">
//         <div className="taskinnerContainer mb-10">
//           <h1 className="heading">Task List</h1>
//           {loading && <Loader />}
//           <div className="  justify-center ">
//             <ul>
//               {tasks && tasks.length > 0 ? (
//                 tasks.map((task) => (
//                   <li
//                     key={task.id}
//                     className={`p-2 border-1 mb-2 border-blue-300 rounded-md ${
//                       task.completed ? "text-green-400" : "text-red-400"
//                     }`}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={task.completed}
//                       onChange={() =>
//                         setTasks(
//                           tasks.map((T) =>
//                             T.id === task.id
//                               ? { ...T, completed: !T.completed }
//                               : T
//                           )
//                         )
//                       }
//                       className="cursor-pointer accent-green-400"
//                     />
//                     {task.title}
//                     <div>
//                       <strong>Start:</strong>
//                       {task.startTime
//                         ? new Date(task.startTime).toLocaleString()
//                         : "Not set"}
//                     </div>
//                     <div>
//                       <strong>End :</strong>
//                       {task.endTime
//                         ? new Date(task.endTime).toLocaleString()
//                         : ""}
//                     </div>
//                     <div className="flex justify-center space-x-2">
//                       <Button onClick={() => handleEdit(task.id)}>Edit</Button>
//                       <Button onClick={opendeletmodal}>delete</Button>
//                     </div>
//                   </li>
//                 ))
//               ) : (
//                 <p>No tasks available</p> // ✅ این بخش پیش‌فرض
//               )}
//             </ul>

//             <Dialog open={ismodalOpen} onOpenChange={setIsmodalOpen}>
//               <Dialog.Content className="bg-white rounded-2xl p-6 shadow-2xl">
//                 <h2 className="mb-4 font-bold text-lg">Are you sure?</h2>
//                 <p className="text-sm text-red-500 mb-4">
//                   This action will remove the task for ever
//                 </p>
//                 <Dialog.Footer className="flex justify-between space-x-3">
//                   <Button
//                     onClick={() => setIsmodalOpen(false)}
//                     className="rounded-2xl border-gray-50 bg-red-500 text-white hover:bg-green-300"
//                   >
//                     Cancel
//                   </Button>
//                   <Button
//                     onClick={confirmDelete}
//                     className="bg-red-300 text-white rounded-2xl border-gray-50 hover:bg-red-600 "
//                   >
//                     Delete
//                   </Button>
//                 </Dialog.Footer>
//               </Dialog.Content>
//             </Dialog>
//           </div>
//           <>
//             <Button onClick={Handle}>Add Task</Button>
//           </>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

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
  const [ismodalOpen, setIsmodalOpen] = useState(false);
  const [tasktoDelet, setTasktoDelet] = useState(null);

  const opendeletmodal = (id) => {
    setTasktoDelet(id);
    setIsmodalOpen(true);
  };

  const confirmDelete = () => {
    const updatetasks = tasks.filter((task) => task.id !== tasktoDelet);
    setTasks(updatetasks);
    setIsmodalOpen(false);
  };

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
    <div>
      <Navbar />

      <div className="taskContainer">
        <div className="mt-10 text-center h-[90%]  shadow-lg bg-amber-50  rounded-xl p-5 md:p-10 max-w-screen sm:w-150  md:w-200 lg:w-300 mb-10">
          <h1 className="heading">Task List</h1>
          {loading && <Loader />}
          <div className="justify-center flex">
            <ul className="md:flex md:flex-row md:space-x-3 md:flex-wrap">
              {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                  <li key={task.id}>
                    <input
                      className={`p-2   border-1 mb-2  border-blue-300 rounded-md ${
                        task.completed ? "text-green-400 " : "text-red-400"
                      }`}
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
                      <strong>End:</strong>
                      {task.endTime
                        ? new Date(task.endTime).toLocaleString()
                        : ""}
                    </div>
                    <div className="flex justify-center space-x-2">
                      <Button onClick={() => handleEdit(task.id)}>Edit</Button>
                      <Button onClick={() => opendeletmodal(task.id)}>
                        Delete
                      </Button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No tasks available</p>
              )}
            </ul>

            <Dialog.Root open={ismodalOpen} onOpenChange={setIsmodalOpen}>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed inset-0 flex justify-center items-center">
                  <div className="bg-white rounded-2xl p-6 shadow-2xl">
                    <h2 className="mb-4 font-bold text-lg">Are you sure?</h2>
                    <p className="text-sm text-red-500 mb-4">
                      This action will remove the task forever
                    </p>
                    <div className="flex justify-between space-x-3">
                      <Button
                        onClick={() => setIsmodalOpen(false)}
                        className="rounded-2xl border-gray-50 bg-red-500 text-white hover:bg-green-300"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={confirmDelete}
                        className="bg-red-300 text-white rounded-2xl border-gray-50 hover:bg-red-600"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          <Button onClick={Handle}>Add Task</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
