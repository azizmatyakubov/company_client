import React from "react";
import { FiEdit2 } from "react-icons/fi";

const TableRow = ({ user }) => {
  return (
    <div className="table-row table-header-row">
      <div className="table-col">
        <div className="table-col-img">
          <img src="https://picsum.photos/200" alt="user" />
        </div>
        <div className="table-col-name">
          <h5>{user.name}</h5>
          <span>{user.surname}</span>
        </div>
      </div>
      <div className="table-col">
        <div className="table-col-badge admin">
          <span>{user.role}</span>
        </div>
      </div>
      <div className="table-col">{user.email}</div>
      <div className="table-col">
        <div className="table-col-badge sales">
          <span>
            {user.department ? user.department.name : "No department"}
          </span>
        </div>
      </div>
      <div className="table-col">{user.position}</div>
      <div className="table-col">
        <div className="table-col-btn">
          <div className="edit-btn">{<FiEdit2 />}</div>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
