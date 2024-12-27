import React, { useState } from "react";

// Engine Decarbonization Component
function EngineDecarbonization() {
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
        cost = 1500;
        time = "1-2 hours";
      } else if (serviceType === "advanced") {
        cost = 2500;
        time = "3-4 hours";
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
        <h2>Select Your Engine Decarbonization Service</h2>
        <select value={serviceType} onChange={handleServiceChange}>
          <option value="">--Select Service--</option>
          <option value="basic">Basic Decarbonization</option>
          <option value="advanced">Advanced Decarbonization</option>
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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6;
          padding: 30px;
          margin: auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          max-width: 850px;
        }

        .service-selection,
        .vehicle-info,
        .image-upload,
        .estimate,
        .booking {
          margin-bottom: 20px;
        }

        h2 {
          font-size: 1.6em;
          color: #2f4f4f;
          margin-bottom: 10px;
          text-align: center;
        }

        input[type="text"],
        input[type="number"],
        input[type="file"],
        select,
        input[type="date"],
        input[type="time"] {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 2px solid #ddd;
          border-radius: 6px;
          font-size: 1em;
          background-color: #fff;
        }

        input[type="file"] {
          padding: 5px;
        }

        select {
          padding: 12px;
          background-color: #fff;
          border: 2px solid #ddd;
          border-radius: 6px;
        }

        button {
          padding: 12px 24px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.2em;
          transition: background-color 0.3s ease;
          width: 100%;
        }

        button:hover {
          background-color: #45a049;
        }

        .estimate,
        .booking {
          background-color: #f1f1f1;
          padding: 20px;
          border-radius: 8px;
        }

        .estimate p,
        .booking p {
          font-size: 1.1em;
          color: #333;
        }

        .booking form input {
          margin-bottom: 15px;
        }

        .image-upload input[type="file"] {
          border: none;
        }

        @media (max-width: 600px) {
          .container {
            padding: 20px;
          }

          h2 {
            font-size: 1.4em;
          }

          button {
            font-size: 1em;
          }

          input[type="text"],
          input[type="number"],
          input[type="file"],
          select,
          input[type="date"],
          input[type="time"] {
            font-size: 0.9em;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default EngineDecarbonization;
