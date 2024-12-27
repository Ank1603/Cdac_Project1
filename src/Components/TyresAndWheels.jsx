import React, { useState } from "react";

// Tyres and Wheels Component
function TyresAndWheels() {
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
    console.log("Service Type Changed: ", e.target.value);
  };

  // Handling file upload
  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setImages(uploadedFiles);
  };

  // Handling estimate submission
  const getEstimate = () => {
    console.log("getEstimate function triggered!");
    console.log("Selected Service Type:", serviceType);

    if (serviceType) {
      let cost;
      let time;
      // Estimate based on selected service
      if (serviceType === "tyreChange") {
        cost = 300;
        time = "1-2 hours";
      } else if (serviceType === "wheelAlignment") {
        cost = 150;
        time = "1 hour";
      } else {
        cost = 0;
        time = "Unknown";
      }

      console.log("Calculated Estimate:", { cost, time });

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
        <h2>Select Your Service</h2>
        <select value={serviceType} onChange={handleServiceChange}>
          <option value="">--Select Service--</option>
          <option value="tyreChange">Tyre Change</option>
          <option value="wheelAlignment">Wheel Alignment</option>
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
  /* Global container styling */
  .container {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    padding: 30px;
    margin: auto;
    max-width: 900px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  /* Section styling for service selection, vehicle info, estimate, booking */
  .service-selection,
  .vehicle-info,
  .image-upload,
  .estimate,
  .booking {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Heading styling */
  h2 {
    font-size: 1.75rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  /* Form input styling */
  input[type="text"],
  input[type="number"],
  input[type="file"],
  select,
  input[type="date"],
  input[type="time"] {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* Focus effect for inputs and selects */
  input[type="text"]:focus,
  input[type="number"]:focus,
  input[type="file"]:focus,
  select:focus,
  input[type="date"]:focus,
  input[type="time"]:focus {
    border-color: #4caf50;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.4);
    outline: none;
  }

  /* Button styling */
  button {
    padding: 12px 20px;
    background-color: #4caf50;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    width: 100%;
  }

  /* Button hover effect */
  button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  /* Disabled button styling */
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* Estimate Section Styling */
  .estimate {
    background-color: #e8f4e5;
    color: #333;
    padding: 20px;
    border-radius: 8px;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* Error message for validation */
  .error {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  /* Image upload section */
  .image-upload input[type="file"] {
    padding: 12px;
  }

  /* Booking form styling */
  .booking {
    display: grid;
    gap: 20px;
  }

  .booking input[type="date"],
  .booking input[type="time"] {
    width: 100%;
  }

  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
    .container {
      padding: 20px;
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
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 15px;
    }

    h2 {
      font-size: 1.5rem;
    }

    .service-selection button,
    .booking button {
      padding: 12px;
    }
  }
`}</style>

    </div>
  );
}

export default TyresAndWheels;
