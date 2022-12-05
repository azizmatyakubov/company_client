import React, { useState } from "react";
import { Modal, Button, Form, FormControl, FormLabel } from "react-bootstrap";
import axiosInstance from "../../utils/axiosInstance";

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
    const res = await axiosInstance.post("/api/v1/auth/register", {
      name,
      surname,
      email,
    });

    if (res.status === 200) {
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
