import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
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
    const res = await axiosInstance.get("/api/v1/users");
    setUsers(res.data);
  };

  const handleDownlaodCsv = async () => {
    const res = await axiosInstance.get("api/v1/users/csv", {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    return;
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
            <button
              className="table-btn-white"
              onClick={() => handleDownlaodCsv()}
            >
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
