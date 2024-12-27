import React, { useState } from 'react';

const VehicleTracking = () => {
    const [location, setLocation] = useState('Fetching location...');

    const fetchLocation = () => {
        // Simulating a location fetch
        setTimeout(() => {
            setLocation('123 Main St, Springfield, USA');
        }, 2000);
    };

    React.useEffect(() => {
        fetchLocation();
    }, []);

    return (
        <div>
            <h1>Vehicle Tracking</h1>
            <h2>Real-time GPS Tracking</h2>
            <p>{location}</p>
        </div>
    );
};

export default VehicleTracking;