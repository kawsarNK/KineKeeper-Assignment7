import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendContextProvider = ({ children }) => {

    const [activities, setActivities] = useState([]);

    const addActivity = (type, name) => {
        const newActivity = {
            id: Date.now(),
            type : type.toLowerCase(), 
            name,
            date: new Date().toLocaleDateString()
        };

        setActivities(prev => [newActivity, ...prev]);
    };

    const data = {
        activities,
        addActivity
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendContextProvider;