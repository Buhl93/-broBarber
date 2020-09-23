import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-bg" id='contact'>
        <div className="vertical-line-contact line-left"></div>
        <div className="opening-hours">
          <h2 className="opening-hours-header">Opening Hours</h2>
          <p>Monday: 9 - 17</p>
          <p>Tuesday: 9 - 19</p>
          <p>Wednesday: 8 - 15</p>
          <p>Thursday: 8 - 16</p>
          <p>Friday - Sunday: 9 - 18</p>
        </div>
        <div className="vertical-line-contact line-mid"></div>
        <div className="contact">
          <h2 className="opening-hours-header">Contact</h2>
          <p>Phone: 34 56 78 90</p>
          <p>Mail: obrobarber@shop.com</p>
          <p>Adress: Østerbrogade 123, 2100 København Ø</p>
        </div>
        <div className="vertical-line-contact line-right"></div>
      </div>
    </div>
  );
}

export default Contact;
