import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import ManageSkills from "./pages/ManageSkills";
import ManageProjects from "./pages/ManageProjects";
import UpdateProject from "./pages/UpdateProject";
import ManageTimeline from "./pages/ManageTimeline";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ViewProject from "./pages/ViewProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/slices/userSlice";
import DashboardProvider from "./context/provider";
import { getAllMessages } from "./store/slices/messageSlice";
import { getAllTimeline } from "./store/slices/timelineSlice";
import { getAllSkills } from "./store/slices/skillSlice";
import { getAllSoftwareApplications } from "./store/slices/softwareApplicationSlice";
import { getAllProjects } from "./store/slices/projectSlice";
import UpdateTimeline from "./pages/UpdateTimeline";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllSkills());
    dispatch(getAllMessages());
    dispatch(getAllTimeline());
    dispatch(getAllProjects());
    dispatch(getAllSoftwareApplications());
  }, []);
  return (
    <DashboardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/manage/skills" element={<ManageSkills />} />
          <Route path="/manage/timeline" element={<ManageTimeline />} />
          <Route path="/update/timeline/:id" element={<UpdateTimeline />} />
          <Route path="/manage/projects" element={<ManageProjects />} />
          <Route path="/view/project/:id" element={<ViewProject />} />
          <Route path="/update/project/:id" element={<UpdateProject />} />
        </Routes>
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </DashboardProvider>
  );
};

export default App;
