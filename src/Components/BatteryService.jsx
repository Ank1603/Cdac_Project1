import React, { useState } from "react";

// Battery Service Component
function BatteryService() {
  // State Hooks for tracking form inputs
  const [serviceType, setServiceType] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState({
    make: "",
    model: "",
    year: "",
    plate: "",
  });
  const [images, setImages] = useState([]);
  const [estimate, setEstimate] = useState(null);
  const [booking, setBooking] = useState({
    date: "",
    time: "",
  });

  // Handling form change for vehicle info
  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handling service selection
  const handleServiceChange = (e) => {
    setServiceType(e.target.value);
    console.log("Service Type Changed: ", e.target.value); // Debugging log to check serviceType
  };

  // Handling file upload
  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setImages(uploadedFiles);
  };

  // Handling estimate submission
  const getEstimate = () => {
    console.log("getEstimate function triggered!");
    console.log("Selected Service Type:", serviceType); // Debugging log to check serviceType

    if (serviceType) {
      let cost;
      let time;
      // Estimate based on selected service
      if (serviceType === "basic") {
        cost = 1000;
        time = "1-2 hours";
      } else if (serviceType === "advanced") {
        cost = 2000;
        time = "2-3 hours";
      } else {
        cost = 0;
        time = "Unknown";
      }

      console.log("Calculated Estimate:", { cost, time }); // Debugging log for calculated estimate

      // Update state for estimate
      setEstimate({ cost, time });
    } else {
      // Handle case when no service is selected
      setEstimate({ cost: 0, time: "Please select a service" });
    }
  };

  // Handling booking form submission
  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", booking);
    alert("Booking confirmed!");
  };

  return (
    <div className="container">
      {/* Service Selection */}
      <div className="service-selection">
        <h2>Select Your Battery Service</h2>
        <select value={serviceType} onChange={handleServiceChange}>
          <option value="">--Select Service--</option>
          <option value="basic">Basic Battery Service</option>
          <option value="advanced">Advanced Battery Service</option>
        </select>
        <button onClick={getEstimate}>Get Estimate</button>
      </div>

      {/* Vehicle Information Form */}
      <div className="vehicle-info">
        <h2>Vehicle Information</h2>
        <input
          type="text"
          name="make"
          placeholder="Car Company"
          value={vehicleInfo.make}
          onChange={handleVehicleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Car Model"
          value={vehicleInfo.model}
          onChange={handleVehicleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Car Year"
          value={vehicleInfo.year}
          onChange={handleVehicleChange}
        />
        <input
          type="text"
          name="plate"
          placeholder="License Plate"
          value={vehicleInfo.plate}
          onChange={handleVehicleChange}
        />
      </div>

      {/* Image Upload Section */}
      <div className="image-upload">
        <h2>Upload Vehicle Images</h2>
        <input type="file" multiple onChange={handleImageUpload} />
      </div>

      {/* Estimate Section */}
      {estimate && (
        <div className="estimate">
          <h2>Estimated Cost & Timeline</h2>
          <p>Cost: ₹ {estimate.cost}</p>
          <p>Estimated Time: {estimate.time}</p>
        </div>
      )}

      {/* Booking Form */}
      <div className="booking">
        <h2>Book Your Service</h2>
        <form onSubmit={handleBooking}>
          <input
            type="date"
            value={booking.date}
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
      <style jsx="true">{`
  .container {
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    margin: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    border-radius: 8px;
    max-width: 900px;
    overflow: hidden;
  }

  .service-selection,
  .vehicle-info,
  .image-upload,
  .estimate,
  .booking {
    margin-bottom: 25px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 10px;
  }

  label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    color: #333;
  }

  input[type="text"],
  input[type="number"],
  input[type="file"],
  select,
  input[type="date"],
  input[type="time"] {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input[type="text"]:focus,
  input[type="number"]:focus,
  input[type="file"]:focus,
  select:focus,
  input[type="date"]:focus,
  input[type="time"]:focus {
    border-color: #4caf50;
    outline: none;
  }

  select {
    padding: 12px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  button:hover {
    background-color: #45a049;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .estimate {
    background-color: #e8f4e5;
    padding: 20px;
    border-radius: 8px;
    color: #333;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .estimate p {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 10px;
  }

  .error {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  .service-selection button {
    width: 100%;
  }

  .image-upload input[type="file"] {
    padding: 10px;
  }

  .booking {
    display: grid;
    gap: 20px;
  }

  .booking input[type="date"],
  .booking input[type="time"] {
    width: 100%;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      padding: 15px;
      margin: 0;
      width: 100%;
    }

    h2 {
      font-size: 1.6rem;
    }

    button {
      padding: 10px;
    }

    .service-selection,
    .vehicle-info,
    .image-upload,
    .estimate,
    .booking {
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.4rem;
    }

    .container {
      padding: 10px;
    }
  }
`}</style>

    </div>
  );
}

export default BatteryService;
