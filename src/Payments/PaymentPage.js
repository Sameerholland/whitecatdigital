import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/Payment.css";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    confirmPhone: "",
    amount: "",
    isRegistered: false,
  });

  const validateForm = () => {
    const { name, phone, confirmPhone, amount } = formData;

    if (!name.trim()) {
      toast.error("Name is required.");
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Enter a valid 10-digit phone number starting with 6-9.");
      return false;
    }
    if (phone !== confirmPhone) {
      toast.error("Phone numbers do not match.");
      return false;
    }
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Amount must be greater than 0.");
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const { confirmPhone, ...apiData } = formData;
    try {
      const response = await axios.post(
        "http://localhost:8000/create-order",
        apiData
      );
      toast.success("Payment initiation successful. Redirecting...");
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error in payment", error);
      toast.error("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="payment-page">
      <h1 className="payment-heading">Complete Your Payment</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPhone">Confirm Phone Number</label>
          <input
            type="tel"
            id="confirmPhone"
            name="confirmPhone"
            value={formData.confirmPhone}
            onChange={handleInputChange}
            placeholder="Re-enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter the amount"
            required
          />
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="isRegistered"
            name="isRegistered"
            checked={formData.isRegistered}
            onChange={handleInputChange}
          />
          <label htmlFor="isRegistered">
            You are already registered to Stawish
          </label>
        </div>
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}
