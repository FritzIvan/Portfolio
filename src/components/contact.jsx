// Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import "./contact.css"; // Import CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .send("service_1su321m", "template_wz0pgbp", formData, "Fq69G7zs_rlKMKo-o")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally reset the form
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(true); // Show the popup
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
      });
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Social Media Icons */}
      <div className="media-icons">
        <a href="https://www.facebook.com/ivanfritz.genovatin" target="_blank" rel="noopener noreferrer" className="facebook">
          <FaFacebook />
        </a>
        <a href="https://github.com/FritzIvan" target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_fritzivan/" target="_blank" rel="noopener noreferrer" className="instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/fritz-ivan-genovatin-a71820316/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin />
        </a>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <p>Thank you for messaging me!</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Contact;