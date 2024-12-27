import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // State for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // After successful login, navigate to the home page
    navigate("/"); // Redirect to home page after login
  };

  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        {/* Forgot Password */}
        <div className="extra-links">
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        {/* Registration Link */}
        <div className="extra-links">
          <p>
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Overall Container */
        .container {
         border: 1px solid #e0e0e0;
          max-width: 420px;
          margin: 60px auto;
          padding: 30px;
         background: #f9f9f9;
          border-radius: 12px;
         box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 28px;
          color: #333333;
          margin-bottom: 20px;
          font-weight: bold;
        }

        /* Form Group */
        .form-group {
          text-align: left;
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #555555;
          margin-bottom: 8px;
        }

        input {
          width: 100%;
          padding: 12px;
          border: 1px solid #cccccc;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus {
          border-color: #4caf50;
          background: #ffffff;
          box-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
        }

        /* Button Styling */
        button {
          width: 100%;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #4caf50, #81c784);
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        button:hover {
          background: linear-gradient(135deg, #388e3c, #66bb6a);
          transform: translateY(-2px);
        }

        button:active {
          background: #2e7d32;
          transform: translateY(0);
        }

        /* Extra Links */
        .extra-links {
          margin-top: 15px;
        }

        .forgot-password {
          font-size: 14px;
          color: #007bff;
          text-decoration: none;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        .extra-links p {
          font-size: 14px;
          color: #555555;
        }

        .extra-links a {
          font-size: 14px;
          color: #007bff;
          text-decoration: none;
          font-weight: 600;
        }

        .extra-links a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 20px;
            margin: 20px;
          }

          h2 {
            font-size: 24px;
          }

          input {
            font-size: 14px;
            padding: 10px;
          }

          button {
            font-size: 14px;
            padding: 10px 16px;
          }

          .extra-links p {
            font-size: 12px;
          }

          .extra-links a {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
