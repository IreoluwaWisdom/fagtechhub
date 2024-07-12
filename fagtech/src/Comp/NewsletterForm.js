import React, { useState } from "react";
import { db } from "../config/firebase";
import {
  doc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  runTransaction,
} from "firebase/firestore";
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
      // Run transaction to increment the counter and get the new value
      const lastEntryQuery = query(
        collection(db, "newsletterDetails"),
        orderBy("documentId", "desc"),
        limit(1),
      );
      const lastEntrySnapshot = await getDocs(lastEntryQuery);
      let lastEntryId = 0;

      if (!lastEntrySnapshot.empty) {
        lastEntryId = parseInt(
          lastEntrySnapshot.docs[0].data().documentId.split("_")[1],
        );
      }

      // Generate new document ID
      const newDocumentId = `${formData.firstName}_${(lastEntryId + 1).toString().padStart(4, "0")}`;

      // Add new document to Firestore
      await setDoc(doc(db, "newsletterDetails", newDocumentId), {
        documentId: newDocumentId, // Save the generated document ID as a field
        firstName: formData.firstName,
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
      window.location.href = "https://www.example.com";
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
