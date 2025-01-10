import React, { useState } from 'react';
import '../../Css/Contactus.css'; // Importing external CSS file
import { FaInstagram, FaFacebook, FaLinkedin,FaWhatsapp ,   FaEnvelope, FaPhoneAlt  } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      

   
      

      

     
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the query.");
    }
  };

  return (
    <div className="contact-container">
      {/* Social Media and Contact Info Section */}
      <ToastContainer/>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/whitecatdigital/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <p>WhiteCatDigital</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61571503119181&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            <p>WhiteCatDigital</p>
          </a>
          <a href="https://www.linkedin.com/in/sameer-speak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <p>WhiteCatDigital</p>
          </a>
          <a href="https://wa.me/7970515036" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            <p>WhiteCatDigital</p>
          </a>
          
        </div>
        <p className='envolpe'>
          <FaEnvelope style={{ marginRight: '8px' }} size="24px" />
          <a href="mailto:sameerspeaks01@gmail.com">whitecatdigital@gamil.com</a>
        </p>
        <p className='envolpe'>
          <FaPhoneAlt style={{ marginRight: '8px' }} size="24px" />
          <a href="tel:+917970515036">+91 7970515036</a>
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>WhatsApp Number:</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
