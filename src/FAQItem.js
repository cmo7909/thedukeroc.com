import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="faq-item" onClick={toggleFAQ} tabIndex="0">
      <div className="faq-question">
        {question}
      </div>
      {isOpen && (
        <div className="faq-answer" onClick={stopPropagation}>
          {typeof answer === 'string' ? (
            answer.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))
          ) : (
            answer
          )}
        </div>
      )}
    </div>
  );
}

export default FAQItem;



