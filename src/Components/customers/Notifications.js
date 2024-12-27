import React, { useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        'Your service is due on 03/10/2024.',
        'Your vehicle tracking is active.'
    ]);

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
