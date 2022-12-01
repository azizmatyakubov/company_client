import SidebarItem from "./SidebarItem";

import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

import "./sidebar.scss";

const Sidebar = () => {
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
          <SidebarItem Icon={FiUsers} text="Orders" isDisabled={true} />
          <SidebarItem Icon={FiUsers} text="Categories" isDisabled={true} />

          <p className="title">USEFUL</p>
          <SidebarItem Icon={IoIosStats} text="Stats" isDisabled={true} />
          <SidebarItem
            Icon={MdNotificationsNone}
            text="Notifications"
            isDisabled={true}
          />

          <p className="title">SERVICE</p>
          <SidebarItem Icon={FiSettings} text="Settings" isDisabled={true} />
          <SidebarItem Icon={CgProfile} text="Profile" isDisabled={true} />

          <p className="title">USER</p>
          <SidebarItem Icon={FiSettings} text="Settings" isDisabled={true} />
          <SidebarItem Icon={CgProfile} text="Profile" isDisabled={false} />
          <SidebarItem Icon={FiSettings} text="Logout" isDisabled={true} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
