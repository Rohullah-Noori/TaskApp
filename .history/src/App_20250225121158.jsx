import { TasksProvider } from "./components/TaskContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Addtask from "./pages/Addtask";
import Edittask from "./pages/Edittask";
import Errorpage from "./pages/Errorpage";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/PrivateContext";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <Router>
            <Routes>
              <PrivateRoute path="/" element={<Landing />} />
              <Route path="/" element={<Landing />} />

              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/addtask" element={<Addtask />} />
              <Route path="/edit-task/:taskId" element={<Edittask />} />
              <Route path="/*" element={<Errorpage />} />
            </Routes>
          </Router>
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
