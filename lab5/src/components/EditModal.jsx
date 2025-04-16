import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, dataUser, handleSave }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: 0,
    orderDate: "",
    status: "New",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (show && dataUser) {
      setFormData({
        customerName: dataUser.customerName || "",
        company: dataUser.company || "",
        orderValue: dataUser.orderValue || 0,
        orderDate: dataUser.orderDate || "",
        status: dataUser.status || "New",
      });
      setErrors({});
    }
  }, [dataUser, show]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Customer Name is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    if (!formData.orderValue || formData.orderValue <= 0) {
      newErrors.orderValue = "Order Value must be a positive number";
    }
    if (!formData.orderDate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      newErrors.orderDate = "Order Date must be in dd/mm/yyyy format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "orderValue" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const updatedOrder = {
        ...dataUser,
        ...formData,
      };
      handleSave(updatedOrder);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="customerName">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              isInvalid={!!errors.customerName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.customerName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              isInvalid={!!errors.company}
            />
            <Form.Control.Feedback type="invalid">
              {errors.company}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="orderValue">
            <Form.Label>Order Value</Form.Label>
            <Form.Control
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleChange}
              min="1"
              isInvalid={!!errors.orderValue}
            />
            <Form.Control.Feedback type="invalid">
              {errors.orderValue}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="orderDate">
            <Form.Label>Order Date</Form.Label>
            <Form.Control
              type="text"
              name="orderDate"
              placeholder="dd/mm/yyyy"
              value={formData.orderDate}
              onChange={handleChange}
              isInvalid={!!errors.orderDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.orderDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;