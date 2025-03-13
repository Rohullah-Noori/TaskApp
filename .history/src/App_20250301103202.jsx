import { TasksProvider } from "./components/TaskContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/PrivateContext";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Addtask from "./pages/Addtask";
import Edittask from "./pages/Edittask";
import Errorpage from "./pages/Errorpage";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <TasksProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route index element={<Landing />} />
                <Route path="/addtask" element={<Addtask />} />
                <Route path="/home" element={<Home />} />
                <Route path="/edit-task/:taskId" element={<Edittask />} />
              </Route>

              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />

              <Route path="/*" element={<Errorpage />} />
            </Routes>
          </TasksProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
