import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import AddSkill from "../components/AddSkill";
import AddProject from "../components/AddProject";
import AddSoftwareApplications from "../components/AddSoftwareApplications";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUserErrors, logout } from "@/store/slices/userSlice";
import { toast } from "react-toastify";
import Messages from "../components/Messages";
import AddTimeline from "../components/AddTimeline";
import PortfolioSidebar from "./PortfolioSidebar";
import MobileViewSidebar from "./MobileViewSidebar";
import useDashboard from "@/context/useDashboard";

const HomePage = () => {
  const [{ active }, { setActive }] = useDashboard();
  const { isAuthenticated, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out!");
  };
  const navigateTo = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigateTo("/login");
    }
  }, [isAuthenticated]);

  const renderContent = () => {
    switch (active) {
      case "Add Project":
        return <AddProject />;
      case "Add Skill":
        return <AddSkill />;
      case "Add Application":
        return <AddSoftwareApplications />;
      case "Add Timeline":
        return <AddTimeline />;
      case "Messages":
        return <Messages />;
      case "Account":
        return <Account />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <PortfolioSidebar
        active={active}
        handleLogout={handleLogout}
        setActive={setActive}
      />
      <MobileViewSidebar
        user={user}
        active={active}
        handleLogout={handleLogout}
        setActive={setActive}
      />

      {renderContent()}
    </div>
  );
};

export default HomePage;
