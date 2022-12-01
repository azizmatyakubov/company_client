import React from "react";
import { AiOutlineCloudDownload, AiOutlineUserAdd } from "react-icons/ai";
import TableRow from "./TableRow";

import "./usersTable.scss";

const UsersTable = () => {
  return (
    <div className="table">
      {/* Table Header  */}
      <div className="table-header">
        <h5>Users list</h5>
        <div className="table-badge">48 users</div>

        <button className="table-btn-white">
          <span>
            <AiOutlineCloudDownload size={20} />
          </span>
          Download CSV
        </button>
        <button className="table-btn-dark-blue">
          <span>
            <AiOutlineUserAdd size={20} />
          </span>
          Add user
        </button>
      </div>
      {/* Users List  */}
      <div className="table-body">
        <div className="table-row table-header-row">
          <div className="table-col">Name</div>
          <div className="table-col">Role</div>
          <div className="table-col">Email</div>
          <div className="table-col">Department</div>
          <div className="table-col">Position</div>
          <div className="table-col"></div>
        </div>
        {/* table row for display users */}
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    </div>
  );
};

export default UsersTable;
