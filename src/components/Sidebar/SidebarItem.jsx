import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ Icon, text, isDisabled }) => {
  return (
    <Link
      to={isDisabled ? "#" : "/" + text.toLowerCase()}
      style={{ textDecoration: "none" }}
    >
      <li>
        <Icon className="icon" />
        <span>{text}</span>
      </li>
    </Link>
  );
};

export default SidebarItem;
