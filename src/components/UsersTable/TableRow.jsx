import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
// import UpdateUserModal from "./UpdateUserModal.jsx";

const TableRow = ({ user, getUsers }) => {
  const role = localStorage.getItem("role");
  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const handleCloseUpdateUserModal = () => setShowUpdateUserModal(false);
  const handleShowUpdateUserModal = () => setShowUpdateUserModal(true);

  return (
    <div className="table-row table-header-row">
      <div className="table-col">
        <div className="table-col-img">
          <img src={user.img} alt="user" />
        </div>
        <div className="table-col-name">
          <h5>{user.name}</h5>
          <span>{user.surname}</span>
        </div>
      </div>
      <div className="table-col">
        <div className={`table-col-badge ${user.role} `}>
          <span>{user.role}</span>
        </div>
      </div>
      <div className="table-col">{user.email}</div>
      <div className="table-col">
        <div className={`table-col-badge ${user.department}`}>
          <span>
            {user.department ? user.department.name : "No department"}
          </span>
        </div>
      </div>
      <div className="table-col">{user.position}</div>
      <div className="table-col">
        {role === '"admin"' && (
          <div className="table-col-btn" onClick={handleShowUpdateUserModal}>
            <div className="edit-btn">{<FiEdit2 />}</div>
          </div>
        )}
      </div>
      {/* <UpdateUserModal
        showUpdateUserModal={showUpdateUserModal}
        handleCloseUpdateUserModal={handleCloseUpdateUserModal}
        userId={user._id}
        getUsers={getUsers}
      /> */}
    </div>
  );
};

export default TableRow;
