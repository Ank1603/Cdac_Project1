import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

export default function AcceptRequestForm() {
  const [formDetails, setFormDetails] = useState({
    customerName: "",
    contactNumber: "",
    serviceType: "",
    additionalNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const acceptRequest = () => {
    const { customerName, contactNumber, serviceType, additionalNotes } =
      formDetails;

    if (
      !customerName.trim() ||
      !contactNumber.trim() ||
      !serviceType.trim()
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    alert(`
      Request Details:
      - Customer Name: ${customerName}
      - Contact Number: ${contactNumber}
      - Service Type: ${serviceType}
      - Additional Notes: ${additionalNotes || "N/A"}
      \nThe request has been accepted!
    `);

    // Reset form fields
    setFormDetails({
      customerName: "",
      contactNumber: "",
      serviceType: "",
      additionalNotes: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Garage Service Request Form</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formDetails.customerName}
          onChange={handleInputChange}
          placeholder="Enter customer's name"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          value={formDetails.contactNumber}
          onChange={handleInputChange}
          placeholder="Enter contact number"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Service Type</label>
        <input
          type="text"
          name="serviceType"
          value={formDetails.serviceType}
          onChange={handleInputChange}
          placeholder="Enter type of service"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Additional Notes</label>
        <textarea
          name="additionalNotes"
          value={formDetails.additionalNotes}
          onChange={handleInputChange}
          placeholder="Enter any additional notes (optional)"
          style={{ ...styles.input, height: "100px" }}
        />
      </div>
      <button onClick={acceptRequest} style={styles.button}>
        Accept Request
      </button>

      {/* Back to Dashboard Button */}
      <Link to="/admin-dashboard" style={styles.backButton}>
        Back to Dashboard
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "50px auto",
    backgroundColor: "#ffffff", // White background for a clean look
    borderRadius: "12px", // Rounded corners for a modern feel
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", // Enhanced shadow for depth
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif", // Modern font family
  },
  inputGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "15px",
    fontWeight: "600", // Slightly bold for better readability
    color: "#333", // Neutral dark color for text
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    borderRadius: "8px", // Rounded corners for inputs
    border: "1px solid #ddd", // Subtle border for cleaner design
    backgroundColor: "#f9f9f9", // Light background for inputs
    outline: "none",
    transition: "border-color 0.3s", // Smooth transition for focus effect
  },
  inputFocus: {
    borderColor: "#007bff", // Blue border on focus for interactivity
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600", // Bold for prominence
    backgroundColor: "#007bff", // Vibrant blue for the button
    color: "#ffffff", // White text for contrast
    border: "none",
    borderRadius: "8px", // Smooth corners for the button
    cursor: "pointer",
    transition: "background-color 0.3s", // Smooth hover effect
  },
  buttonHover: {
    backgroundColor: "#0056b3", // Darker blue on hover for feedback
  },
  backButton: {
    display: "inline-block",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600", // Bold for prominence
    backgroundColor: "#28a745", // Green background for Back button
    color: "#ffffff", // White text for contrast
    textDecoration: "none",
    borderRadius: "8px", // Rounded corners for button
    marginTop: "20px", // Adds some space between form and back button
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};
