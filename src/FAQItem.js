import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderAnswer = () => {
    if (typeof answer === 'string') {
      return answer.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      // If answer is not a string (e.g., a React component), render it directly
      return answer;
    }
  };

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        {question}
      </div>
      {isOpen && (
        <div className="faq-answer">
          {renderAnswer()}
        </div>
      )}
    </div>
  );
}

export default FAQItem;


