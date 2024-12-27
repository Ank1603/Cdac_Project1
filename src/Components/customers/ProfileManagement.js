import React, { useState } from 'react';

const ProfileManagement = () => {
    const [personalDetails, setPersonalDetails] = useState({ name: '', email: '', phone: '' });
    const [vehicleDetails, setVehicleDetails] = useState({ make: '', model: '', licensePlate: '' });

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleVehicleChange = (e) => {
        const { name, value } = e.target;
        setVehicleDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Personal Details:', personalDetails);
        console.log('Vehicle Details:', vehicleDetails);
    };

    return (
        <div>
            <h1>Profile Management</h1>
            <form onSubmit={handleSubmit}>
                <h2>Personal Details</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={personalDetails.name} onChange={handlePersonalChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={personalDetails.email} onChange={handlePersonalChange} />
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" value={personalDetails.phone} onChange={handlePersonalChange} />
                </label>

                <h2>Vehicle Details</h2>
                <label>
                    Vehicle Make:
                    <input type="text" name="make" value={vehicleDetails.make} onChange={handleVehicleChange} />
                </label>
                <label>
                    Vehicle Model:
                    <input type="text" name="model" value={vehicleDetails.model} onChange={handleVehicleChange} />
                </label>
                <label>
                    License Plate:
                    <input type="text" name="licensePlate" value={vehicleDetails.licensePlate} onChange={handleVehicleChange} />
                </label>

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProfileManagement;