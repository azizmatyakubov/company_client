import React, { useState } from "react";
import { Modal, Button, Form, FormControl, FormLabel } from "react-bootstrap";

const UpdateUserModal = ({
  showUpdateUserModal,
  handleCloseUpdateUserModal,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [position, setPosition] = useState("sales");
  const [department, setDepartment] = useState("user");
  const [departments, setDepartments] = useState([
    "sales",
    "marketing",
    "it",
    "hr",
  ]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
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
        department,
      }),
    });
    const data = await res.json();
    console.log(data);
    handleCloseUpdateUserModal();
  };

  return (
    <Modal show={showUpdateUserModal} onHide={handleCloseUpdateUserModal}>
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

          <Form.Group className=" mb-2" controlId="inputDepartment">
            <FormControl
              as="select"
              value={department}
              className="form-control form-input-top"
              placeholder="Department"
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              {departments.map((department) => (
                <option value={department}>{department}</option>
              ))}
            </FormControl>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseUpdateUserModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateUserModal;
