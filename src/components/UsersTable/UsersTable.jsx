import React, { useState, useEffect, useContext } from "react";
import { AiOutlineCloudDownload, AiOutlineUserAdd } from "react-icons/ai";
import AddUserModal from "./AddUserModal";
import TableRow from "./TableRow";

import "./usersTable.scss";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const role = localStorage.getItem("role");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const getUsers = async () => {
    const res = await fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    });
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="table">
      {/* Table Header  */}
      <div className="table-header">
        <h5>Users list</h5>
        <div className="table-badge">{users.length} users</div>

        {role === '"admin"' && (
          <>
            <button className="table-btn-white">
              <span>
                <AiOutlineCloudDownload size={20} />
              </span>
              Download CSV
            </button>
            <button className="table-btn-dark-blue" onClick={handleShowModal}>
              <span>
                <AiOutlineUserAdd size={20} />
              </span>
              Add user
            </button>
          </>
        )}
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
        {users.map((user) => (
          <TableRow key={user._id} user={user} getUsers={getUsers} />
        ))}
      </div>
      <AddUserModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        getUsers={getUsers}
      />
    </div>
  );
};

export default UsersTable;
