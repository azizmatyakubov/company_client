import React, { useState } from "react";
import { Modal, Button, Form, FormControl, FormLabel } from "react-bootstrap";

const AddUserModal = ({ showModal, handleCloseModal, getUsers }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("sales");
  const positions = ["developer", "designer", "manager", "sales"];

  const handleClose = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPosition("sales");
    handleCloseModal();
  };

  const handleAddUser = async (e) => {
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
        position,
      }),
    });
    const data = await res.json();
    if (data.id) {
      getUsers();
      handleClose();
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
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

          {/* Position  */}
          <Form.Group className="form-floating mb-2" controlId="inputPosition">
            <FormControl
              as="select"
              value={position}
              className="form-control form-input-top"
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              {positions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </FormControl>
            <FormLabel>Position</FormLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUserModal;
