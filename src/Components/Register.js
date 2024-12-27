import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // State for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // State for the role

  // Use navigate from react-router-dom to programmatically route
  const navigate = useNavigate();

  // Handle role change and navigate
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Navigate based on the selected role
    if (selectedRole === "admin") {
      navigate("/admin-login"); // Navigate to Admin Component
    } else if (selectedRole === "customer") {
      navigate("/customer-login"); // Navigate to Staff Component

    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Log the form data (or send it to an API)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Role:", role);

    // Navigate after successful registration
    navigate("/login"); // Redirect to login page after successful registration
  };

  return (
    <>
      <div className="container mt-5">
        <h2>User Register Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="confirmPassword">Confirm Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="role">User Role:</label>
              </td>
              <td>
                <select
                  className="form-control"
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange} // Listen to role change
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                  {/* // <option value="resident">Resident</option> */}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Register</button>
              </td>
            </tr>
          </table>
        </form>
      </div>







      <style jsx>{`
  .container {
    background: #f9f9f9; /* Light gray background for a modern look */
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    max-width: 500px;
    width: 90%;
    margin: 20px auto;
  }

  h2 {
    text-align: center;
    color: #333;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font-weight: 600;
    color: #555;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
  }

  input,
  select {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  input:focus,
  select:focus {
    border-color: #4caf50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.2);
    outline: none;
  }

  button {
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  button:hover {
    background: #45a049;
    transform: translateY(-2px);
  }

  button:active {
    background: #3e8e41;
    transform: translateY(0);
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px; /* Add space between rows */
  }

  td {
    vertical-align: top;
  }

  @media (max-width: 768px) {
    .container {
      padding: 20px;
      width: 95%;
    }

    button {
      font-size: 16px;
      padding: 10px 15px;
    }

    input,
    select {
      font-size: 14px;
      padding: 8px 10px;
    }
  }
`}</style>

    </>
  );
}
