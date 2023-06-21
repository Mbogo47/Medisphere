import React, { useState } from 'react';
import SidebarComponent from '../components/Sidebar';
import Appointments from './Appointments';

import '../styles/dash.css';
import Medical from './MedicalRecords';

const Dashboard = () => {
    const [showAppointments, setShowAppointments] = useState(false);
    const [showRecords, setShowRecords] = useState(false);
    const handleAppointmentsClick = () => {
        setShowAppointments(true);
    };
    const handleRecordsClick = () => {
        setShowRecords(true);
    };

    return (
        <>
            <div className="dashboard">
                <SidebarComponent onAppointmentsClick={handleAppointmentsClick} />
                <div className="dashboard-content">
                    {showAppointments ? (
                        <Appointments />
                    ) : (
                        <p>Welcome To Medisphere</p>
                    )}
                    {showRecords ? (
                        <Medical />
                    ) : (
                        <p>Welcome To Medisphere</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
