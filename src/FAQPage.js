import React from 'react';
import FAQItem from './FAQItem';

function FAQPage() {
  const faqItems = [
    {
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, we will send you a tracking number via email."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQPage;
