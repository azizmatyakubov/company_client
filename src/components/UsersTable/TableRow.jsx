import React from "react";
import { FiEdit2 } from "react-icons/fi";

const TableRow = () => {
  return (
    <div className="table-row table-header-row">
      <div className="table-col">
        <div className="table-col-img">
          <img src="https://picsum.photos/200" alt="user" />
        </div>
        <div className="table-col-name">
          <h5>John Doe</h5>
          <span>@Joined</span>
        </div>
      </div>
      <div className="table-col">
        <div className="table-col-badge admin">
          <span>Admin</span>
        </div>
      </div>
      <div className="table-col">blablabla@gmail.com</div>
      <div className="table-col">
        <div className="table-col-badge sales">
          <span>Sales</span>
        </div>
      </div>
      <div className="table-col">Product Manager</div>
      <div className="table-col">
        <div className="table-col-btn">
          <div className="edit-btn">{<FiEdit2 />}</div>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
