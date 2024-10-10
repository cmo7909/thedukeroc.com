import React, { useState, useEffect } from 'react';
import EmailModal from './EmailModal';

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false);  
  const [successMessage, setSuccessMessage] = useState(false);


  const handleCloseModal = () => setShowModal(false);

  const handleSuccess = () => {
    setShowModal(false);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 5000); 
  };

  useEffect (() => {
    const timer = setTimeout(() => {
    setShowModal(true);
  }, 500);

  return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-page">
      {/* Success message after submission */}
      {successMessage && <div className="alert alert-success">Your inquiry has been sent successfully!</div>}

      {/* Automatically show the email modal when the page loads */}
      <EmailModal show={showModal} handleClose={handleCloseModal} handleSuccess={handleSuccess} />
    </div>
  );
};

export default ContactPage;

