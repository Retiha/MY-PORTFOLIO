import React from "react";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
      <p>Or reach me via email: yourmail@example.com</p>
    </section>
  );
}

export default Contact;
