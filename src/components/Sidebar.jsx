import { NavLink } from "react-router-dom";

import "./sidebar.css";

function Sidebar() {
  const items = [
    { path: "/dashboard", title: "Dashboard", icon: "bi-house-door" },
    { path: "/apps", title: "Applications", icon: "bi-layers" },
    { path: "/users", title: "Users", icon: "bi-people" },
    { path: "/settings", title: "Settings", icon: "bi-gear" },
  ];

  return (
    <>
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {items.map((item, i) => (
            <li key={i} className="nav-item">
              <NavLink className="nav-link" end to={item.path}>
                <i className={`bi ${item.icon} pe-2`} />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
