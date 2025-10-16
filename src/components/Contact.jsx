import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(() => setStatus("Message sent successfully!"))
      .catch(() => setStatus("Failed to send message."));
    e.target.reset();
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className="btn">Send</button>
        <p className="form-status">{status}</p>
      </form>
    </section>
  );
}

export default Contact;
