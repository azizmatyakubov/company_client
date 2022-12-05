import SidebarItem from "./SidebarItem";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";

import "./sidebar.scss";
import axiosInstance from "../../utils/axiosInstance";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");

    const res = await axiosInstance.get("api/v1/auth/logout");
    if (res.status === 204) {
      navigate("/login");
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <SidebarItem Icon={RxDashboard} text="Dashboard" isDisabled={false} />

          <p className="title">LISTS</p>
          <SidebarItem Icon={FiUsers} text="Users" isDisabled={false} />
          <SidebarItem
            Icon={HiOutlineOfficeBuilding}
            text="Departments"
            isDisabled={true}
          />
          <SidebarItem Icon={FiShoppingBag} text="Orders" isDisabled={true} />
          <SidebarItem
            Icon={BiCategoryAlt}
            text="Categories"
            isDisabled={true}
          />

          <p className="title">USEFUL</p>
          <SidebarItem Icon={IoIosStats} text="Stats" isDisabled={true} />
          <SidebarItem
            Icon={MdNotificationsNone}
            text="Notifications"
            isDisabled={true}
          />

          <p className="title">SUPPORT</p>
          <SidebarItem Icon={BiSupport} text="Get help" isDisabled={true} />
          <SidebarItem
            Icon={CgProfile}
            text="Submit feedback"
            isDisabled={true}
          />

          <p className="title">SERVICE</p>
          <SidebarItem Icon={FiSettings} text="Settings" isDisabled={true} />
          <SidebarItem Icon={CgProfile} text="Profile" isDisabled={false} />
          <li onClick={() => handleLogout()}>
            <AiOutlineLogout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
