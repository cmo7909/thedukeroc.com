import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default FAQItem;
