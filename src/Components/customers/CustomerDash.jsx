import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function CustomerDash() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle the sidebar open or closed
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div style={styles.wrapper}>
            {/* Button to toggle sidebar */}
            <button
                className="btn btn-primary"
                onClick={toggleSidebar}
                style={styles.toggleButton}
            >
                {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>

            {/* Sidebar */}
            <div
                className={`sidebar ${isSidebarOpen ? "open" : ""}`}
                style={{
                    ...styles.sidebar,
                    ...(isSidebarOpen ? styles.sidebarOpen : {}),
                }}
            ></div>

            <div style={styles.wrapper}>
                {/* Content area */}
                <div style={styles.contentArea}>
                    <div style={styles.container}>
                        <h2>Welcome to the Customer Dashboard</h2>
                        <p>Manage your personal details, view your garage services, and more.</p>

                        {/* Overview of customer details */}
                        <div style={styles.card}>
                            <h4>Customer Overview</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>johndoe@example.com</td>
                                        <td>Active</td>
                                    </tr>
                                    {/* Add more customer rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        {/* Garage services overview */}
                        <div style={styles.card}>
                            <h4>Garage Services</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Garage Name</th>
                                        <th>Service Status</th>
                                        <th>Next Appointment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Garage A</td>
                                        <td>Active</td>
                                        <td>Dec 28, 2024</td>
                                    </tr>
                                    {/* Add more garage services rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        {/* Links to other customer-related actions */}
                        <div style={styles.buttonGroup}>
                            <Link to="/update-details" style={styles.link}>
                                Update Personal Details
                            </Link>
                            <Link to="/view-services" style={styles.link}>
                                View Services
                            </Link>
                            <Link to="/contact-support" style={styles.link}>
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        position: "relative",
        minHeight: "100vh", // Full-page height
        backgroundColor: "#f9f9f9", // Soft off-white background for less strain on eyes
        fontFamily: "'Inter', sans-serif", // Clean, modern font
        lineHeight: "1.6", // Improved readability
    },
    contentArea: {
        width: "100%",
        padding: "20px",
        marginLeft: "0px",
        transition: "margin-left 0.3s ease", // Smooth transition for layout changes
        overflowY: "auto", // Ensure scrolling if content overflows
    },
    container: {
        padding: "25px",
        backgroundColor: "#fff", // Clean white container background
        borderRadius: "10px", // Smooth, rounded corners
        border: "1px solid #e0e0e0", // Light gray border for definition
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for elevation
        maxWidth: "600px", // Restrict width for better readability
        margin: "50px auto", // Center alignment
    },
    card: {
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transitions for hover
    },
    sidebar: {
        position: "fixed",
        top: 0,
        left: "-200px", // Reduced width for smaller sidebar
        width: "200px", // Updated sidebar width
        height: "100%",
        backgroundColor: "#f5f5f5", // Light gray background for sidebar
        color: "#333", // Darker gray for readable text
        paddingTop: "30px",
        paddingLeft: "20px",
        transition: "transform 0.3s ease", // Smooth slide-in effect
        zIndex: 1000,
        borderRight: "1px solid #e0e0e0",
    },
    heading: {
        color: "#333", // Dark gray for strong text contrast
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        letterSpacing: "0.5px", // Slight spacing for readability
    },
    link: {
        color: "#007bff", // Accessible blue for links
        display: "block",
        padding: "12px 18px",
        textDecoration: "none",
        marginBottom: "10px",
        borderRadius: "6px",
        backgroundColor: "#f8f9fa", // Light background for links
        border: "1px solid #e0e0e0", // Subtle border for definition
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", // Subtle shadow
        transition: "all 0.3s ease", // Smooth hover effects
    },
    linkHover: {
        backgroundColor: "#e9ecef", // Slightly darker shade on hover
        transform: "translateX(5px)", // Subtle movement for focus
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Enhanced shadow on hover
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
    },
};
