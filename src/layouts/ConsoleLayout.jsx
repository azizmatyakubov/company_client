import { useNavigate, Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import ConsoleNavbar from "../components/ConsoleNavbar";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

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
      <ConsoleNavbar />
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <Sidebar />
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default ConsoleLayout;
