import React, { useState } from 'react';

const ServiceHistory = () => {
    const [pastRecords, setPastRecords] = useState([
        { service: 'Oil Change', date: '2024-01-01' },
        { service: 'Tire Rotation', date: '2024-02-15' }
    ]);
    const [upcomingAppointments, setUpcomingAppointments] = useState([
        { service: 'Brake Inspection', date: '2024-03-10' }
    ]);

    return (
        <div>
            <h1>Service History</h1>

            <h2>Past Maintenance Records</h2>
            <ul>
                {pastRecords.map((record, index) => (
                    <li key={index}>{record.service} - {record.date}</li>
                ))}
            </ul>

            <h2>Upcoming Appointments</h2>
            <ul>
                {upcomingAppointments.map((appointment, index) => (
                    <li key={index}>{appointment.service} - {appointment.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceHistory;