import Heading from "../../common/Heading";
import React from 'react';

import './style.scss';

function Faq() {
  return (
    <div className="faq-container">
      <Heading size={1.5} title="Faq" />
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3 className="faq-question">What types of trucks do you operate?</h3>
        <p className="faq-answer">
          We operate a fleet of modern trucks including flatbeds, refrigerated trucks, and dry vans, ensuring we meet various transportation needs.
        </p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">What services do you offer?</h3>
        <p className="faq-answer">
          Our services range from long-haul transportation to expedited shipping, warehousing, and logistics management, catering to diverse client requirements.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">How can I get a quote for transportation services?</h3>
        <p className="faq-answer">
          You can request a quote by filling out the form on our Contact page or contacting our customer service team directly via phone or email.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Do you provide tracking services for shipments?</h3>
        <p className="faq-answer">
          Yes, we offer real-time tracking for all shipments to ensure transparency and peace of mind for our clients.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What regions do you operate in?</h3>
        <p className="faq-answer">
          We provide transportation services across the United States, with a focus on delivering goods efficiently and on time.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Are your drivers experienced and licensed?</h3>
        <p className="faq-answer">
          Absolutely. Our drivers are highly trained, licensed professionals with extensive experience in the transportation industry.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Can you handle oversized or specialized shipments?</h3>
        <p className="faq-answer">
          Yes, we specialize in handling oversized and specialized shipments, providing customized solutions to meet specific client needs.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What safety measures do you have in place?</h3>
        <p className="faq-answer">
          Safety is our top priority. We adhere to strict safety protocols and regularly maintain our fleet to ensure the highest standards of safety and reliability.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Do you offer insurance coverage for shipments?</h3>
        <p className="faq-answer">
          Yes, we provide comprehensive insurance coverage for all shipments to protect against unforeseen circumstances during transportation.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">How can I track the status of my shipment?</h3>
        <p className="faq-answer">
          You can easily track the status of your shipment through our online tracking system or by contacting our customer service team for real-time updates.
        </p>
      </div>

    </div>
  );
};

export default Faq;


