import React, { useState, useEffect } from 'react';
import EmailModal from './EmailModal';

const ContactPage = () => {
  const [showModal, setShowModal] = useState(true);  // Modal is automatically shown on page load
  const [successMessage, setSuccessMessage] = useState(false);

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  // Show success message
  const handleSuccess = () => {
    setShowModal(false);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 5000);  // Show the success message for 5 seconds
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any inquiries, feel free to fill out the form below.</p>

      {/* Success message after submission */}
      {successMessage && <div className="alert alert-success">Your inquiry has been sent successfully!</div>}

      {/* Automatically show the email modal when the page loads */}
      <EmailModal show={showModal} handleClose={handleCloseModal} handleSuccess={handleSuccess} />
    </div>
  );
};

export default ContactPage;

