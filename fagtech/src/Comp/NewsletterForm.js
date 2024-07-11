import React, { useState } from "react";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import "../Styles/NewsLetterForm.css";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    whatsapp: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "newsletterDetails", formData.firstName), {
        email: formData.email,
        whatsapp: formData.whatsapp,
      });
      setStatus({ message: "Subscription successful!", type: "success" });
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatus({
        message: "Subscription failed. Please try again.",
        type: "error",
      });
    } finally {
      // Redirect user to a specific link after attempt
      window.location.href = "https://thank-you.com"; // Change '/thank-you' to your desired URL
    }
  };

  const handleClearStatus = () => {
    setStatus({ message: "", type: "" });
    setFormData({
      firstName: "",
      email: "",
      whatsapp: "",
    });
  };

  return (
    <div className="newsletter-form-container">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="form-group">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp Number"
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
          <span className="clear-status" onClick={handleClearStatus}>
            ✔
          </span>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
