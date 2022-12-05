import React, { useState, useEffect } from "react";
import { Modal, Button, Form, FormControl, FormLabel } from "react-bootstrap";
import axiosInstance from "../../utils/axiosInstance";

const UpdateUserModal = ({
  showUpdateUserModal,
  handleCloseUpdateUserModal,
  userId,
  getUsers,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const getUserById = async (id) => {
    const res = await axiosInstance.get(`/api/v1/users/${id}`);
    setName(res.data.name);
    setSurname(res.data.surname);
    setEmail(res.data.email);
  };

  const handleClose = () => {
    setName("");
    setSurname("");
    setEmail("");
    handleCloseUpdateUserModal();
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const res = await axiosInstance.put(`/api/v1/users/${userId}`, {
      name,
      surname,
      email,
    });

    if (res.status === 200) {
      getUsers();
      handleClose();
    }
  };

  useEffect(() => {
    getUserById(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUpdateUserModal === true]);

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
