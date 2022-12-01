import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import "./consoleLayout.scss";

function ConsoleLayout() {
  const token = localStorage.getItem("auth");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <div className="d-flex">
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
