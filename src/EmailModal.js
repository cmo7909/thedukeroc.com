import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./EmailModal.css";

const EmailModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    dates: '',
    partySize: '',
    inquiry: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!formData.name || !formData.email || !formData.number || !formData.dates || !formData.partySize || !formData.inquiry) {
      setError('All fields are required. Please fill in all fields before submitting.');
      return;
    }

    try {
     
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  
      });

      if (response.ok) {
        setSuccess(true); 
        setFormData({  
          name: '',
          email: '',
          number: '',
          dates: '',
          partySize: '',
          inquiry: '',
        });
      } else {
        console.error('Error sending email:', response.statusText);
        setError('There was an issue sending your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('There was an error sending your inquiry. Please check your connection and try again.');
    }
  };

  // Navigate to the home page
  const handleModalClose = () => {
    handleClose();
    navigate('/'); // Redirect to home page after closing the modal
  };

  return (
    <Modal show={show} onHide={handleModalClose} backdrop="static" centered>
      <Modal.Title>Send an Inquiry</Modal.Title>
      <Modal.Body>
        {/* Display success message if form was submitted successfully */}
        {success && (
          <div className="success-message d-flex flex-column align-items-center">
            <Alert variant="success" className="custom-alert text-center">
              Your inquiry has been sent successfully!
            </Alert>
            <Button variant="secondary" onClick={handleModalClose} className="mt-3 w-50">
              Close and Return to Home
            </Button>
          </div>
        )}
        
        {/* Display error message if there is one */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Form only appears if no success */}
        {!success && (
          <Form onSubmit={handleSubmit}>
            {/* Form fields */}
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Phone number:</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={formData.number}
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date of event(s):</Form.Label>
              <Form.Control
                type="text"
                name="dates"
                value={formData.dates}
                placeholder="Enter the date for the inquiry"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPartySize">
              <Form.Label>Party size:</Form.Label>
              <Form.Control
                type="text"
                name="partySize"
                value={formData.partySize}
                placeholder="Size of your party"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formInquiry">
              <Form.Label>Inquiry:</Form.Label>
              <Form.Control
                as="textarea"
                name="inquiry"
                value={formData.inquiry}
                placeholder="Enter your inquiry"
                onChange={handleChange}
                rows={8} 
                style={{ resize: 'none', overflowY: 'auto' }} 
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center mt-3">
              <Button variant="secondary" type="submit" className="w-25 mx-2 custom-button">
                Submit
              </Button>
              <Button variant="secondary" onClick={handleModalClose} className="w-25 mx-2 custom-button">
                Close
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;

