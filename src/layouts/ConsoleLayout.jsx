import { useNavigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import "./consoleLayout.scss";
import "../styles/dark.scss";
import UserContext from "../context/UserContext";

function ConsoleLayout() {
  const { darkMode } = useContext(UserContext);

  const token = localStorage.getItem("auth");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <div className={`console-container d-flex ${darkMode ? "dark" : ""}`}>
        <Sidebar />
        <div className="page-content-wrapper">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ConsoleLayout;

