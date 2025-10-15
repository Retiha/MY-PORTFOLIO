import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
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
      </form>
    </section>
  );
}

export default Contact;
