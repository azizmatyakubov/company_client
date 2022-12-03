import React, { useState, useEffect } from "react";
import { Modal, Button, Form, FormControl, FormLabel } from "react-bootstrap";

const UpdateUserModal = ({
  showUpdateUserModal,
  handleCloseUpdateUserModal,
  userId,
  getUsers,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [position, setPosition] = useState("developer");
  const positions = ["developer", "designer", "manager", "sales"];

  const getUserById = async (id) => {
    const res = await fetch(`/api/v1/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
      credentials: "include",
    });
    const data = await res.json();
    setName(data.name);
    setSurname(data.surname);
    setEmail(data.email);
    setRole(data.role);
    setPosition(data.position);
  };

  const handleClose = () => {
    setName("");
    setSurname("");
    setEmail("");
    setRole("user");
    setPosition("sales");
    handleCloseUpdateUserModal();
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/v1/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        role,
        position,
      }),
    });

    if (res.status === 200) {
      getUsers();
      handleClose();
    }
  };

  const handleDepartmentChange = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `/api/v1/users/changeDepartment?departmentName="departmentId"&userId=${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );

    if (res.status === 200) {
      getUsers();
      handleClose();
    }
  };

  useEffect(() => {
    getUserById(userId);
  }, [showUpdateUserModal]);

  return (
    <Modal show={showUpdateUserModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Name  */}
          <Form.Group className="form-floating mb-2" controlId="inputName">
            <FormControl
              type="text"
              value={name}
              className="form-control form-input-top"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormLabel>Name</FormLabel>
          </Form.Group>

          {/* Surname  */}
          <Form.Group className="form-floating mb-2" controlId="inputSurname">
            <FormControl
              type="text"
              value={surname}
              className="form-control form-input-top"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <FormLabel>Surname</FormLabel>
          </Form.Group>

          {/* Email  */}
          <Form.Group className="form-floating mb-2" controlId="inputEmail">
            <FormControl
              type="email"
              value={email}
              className="form-control form-input-top"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormLabel>Email</FormLabel>
          </Form.Group>

          {/* Role  */}
          <Form.Group className=" mb-2" controlId="inputRole">
            <FormControl
              as="select"
              value={role}
              className="form-control form-input-top"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </FormControl>
          </Form.Group>

          {/* Position  */}
          <Form.Group className=" mb-2" controlId="inputPosition">
            <FormControl
              as="select"
              value={position}
              className="form-control form-input-top"
              placeholder="Position"
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              {positions.map((userPosition, index) => (
                // active option is state

                <option
                  key={index}
                  value={userPosition}
                  defaultValue={userPosition === position ? userPosition : ""}
                >
                  {userPosition}
                </option>
              ))}
            </FormControl>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateUser}>
          Update user
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateUserModal;
