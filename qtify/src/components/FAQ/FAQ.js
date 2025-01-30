import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: "Is Qtify free to use?", answer: "Yes, Qtify is completely free!" },
    { question: "Can I download and listen to songs offline?", answer: "Sorry, we don't provide downloads." }
  ];

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {faq.question}
          </button>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
