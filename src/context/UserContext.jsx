import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const saved = localStorage.getItem('zyro_user_data');
        return saved ? JSON.parse(saved) : null;
    });

    const [selectedPlan, setSelectedPlan] = useState(() => {
        return localStorage.getItem('zyro_selected_plan') || null;
    });

    useEffect(() => {
        if (userData) {
            localStorage.setItem('zyro_user_data', JSON.stringify(userData));
        }
    }, [userData]);

    useEffect(() => {
        if (selectedPlan) {
            localStorage.setItem('zyro_selected_plan', selectedPlan);
        }
    }, [selectedPlan]);

    return (
        <UserContext.Provider value={{ userData, setUserData, selectedPlan, setSelectedPlan }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
