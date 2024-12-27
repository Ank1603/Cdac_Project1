import React, { useState } from "react";

const Periodicservices = () => {
  const [services, setServices] = useState([]);
  const [vehicle, setVehicle] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [frequency, setFrequency] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  // Add a new service to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !vehicle ||
      !serviceType ||
      !frequency ||
      !appointmentDate ||
      !appointmentTime
    ) {
      alert("Please fill all fields");
      return;
    }

    const newService = {
      vehicle,
      serviceType,
      frequency: parseInt(frequency, 10),
      lastServiceDate: new Date().toISOString(),
      appointmentDate,
      appointmentTime,
    };

    // Add the new service to the list
    setServices([...services, newService]);

    // Reset form fields
    setVehicle("");
    setServiceType("");
    setFrequency("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  // Calculate the next service date based on frequency
  const calculateNextServiceDate = (lastServiceDate, frequency) => {
    const nextServiceDate = new Date(lastServiceDate);
    nextServiceDate.setMonth(nextServiceDate.getMonth() + frequency);
    return nextServiceDate.toLocaleDateString();
  };

  return (
    <div className="app">
      <h1>Garage Service Scheduler</h1>

      {/* Service Form */}
      <form onSubmit={handleSubmit} className="service-form">
        <div>
          <label>Vehicle:</label>
          <input
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            placeholder="Enter vehicle name or plate number"
          />
        </div>
        <div>
          <label>Service Type:</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">Select Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Tire Rotation">Tire Rotation</option>
            <option value="Brake Check">Brake Check</option>
          </select>
        </div>
        <div>
          <label>Frequency (Months):</label>
          <input
            type="number"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            min="1"
            placeholder="Frequency in months"
          />
        </div>

        {/* Book Appointment Section */}
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <label>Appointment Time:</label>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>

        <button type="submit">Book Service</button>
      </form>

      {/* Service List */}
      <div className="service-list">
        <h2>Scheduled Services</h2>
        {services.length === 0 ? (
          <p>No services scheduled yet.</p>
        ) : (
          services.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.vehicle}</h3>
              <p>
                <strong>Service Type:</strong> {service.serviceType}
              </p>
              <p>
                <strong>Frequency:</strong> Every {service.frequency} month(s)
              </p>
              <p>
                <strong>Last Service Date:</strong>{" "}
                {new Date(service.lastServiceDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Next Service Date:</strong>{" "}
                {calculateNextServiceDate(
                  service.lastServiceDate,
                  service.frequency
                )}
              </p>
              <p>
                <strong>Appointment Date:</strong> {service.appointmentDate}
              </p>
              <p>
                <strong>Appointment Time:</strong> {service.appointmentTime}
              </p>
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .app {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f8f8f8;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .service-form {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .service-form div {
          margin-bottom: 15px;
        }

        label {
          font-weight: bold;
        }

        input,
        select {
          padding: 8px;
          margin-top: 5px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        .service-list {
          margin-top: 30px;
        }

        .service-item {
          background-color: #ffffff;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .service-item h3 {
          margin-top: 0;
          font-size: 18px;
        }

        .service-item p {
          margin: 5px 0;
        }

        .service-item strong {
          font-weight: bold;
        }

        .service-list h2 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Periodicservices;
