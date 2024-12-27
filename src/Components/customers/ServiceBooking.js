import React, { useState } from 'react';

const ServiceBooking = () => {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const services = ['Oil Change', 'Tire Rotation', 'Brake Inspection'];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Service:', service, 'Date:', date, 'Time:', time);
    };

    return (
        <div>
            <h1>Service Booking</h1>
            <h2>Service List</h2>
            <ul>
                {services.map((s, index) => (
                    <li key={index}>{s}</li>
                ))}
            </ul>

            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Service:
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="">Select a service</option>
                        {services.map((s, index) => (
                            <option key={index} value={s}>{s}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <label>
                    Time:
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </label>
                <button type="submit">Book Service</button>
            </form>
        </div>
    );
};

export default ServiceBooking;