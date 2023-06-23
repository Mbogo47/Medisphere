import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUserInjured } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dashcontent = () => {

    // Fetch appointments count
    const [count, setCount] = useState([]);

    useEffect(() => {
        const fetchAppointmentsCount = async () => {
            const response = await fetch('http://localhost:8081/appointments/count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allAppointmentsCount = await response.json()
            setCount(allAppointmentsCount.recordset)
        }
        fetchAppointmentsCount()
    }, [])

    // Fetch patients count
    const [countPatient, setCountpatient] = useState([]);
    useEffect(() => {
        const fetchPatientsCount = async () => {
            const response = await fetch('http://localhost:8081/patients/count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allPatientsCount = await response.json()
            setCountpatient(allPatientsCount.recordset)
        }
        fetchPatientsCount()
    }, [])

    // Surgery count
    const [countSurgery, setCountSurgery] = useState([]);
    useEffect(() => {
        const fetchSurgeryCount = async () => {
            const response = await fetch('http://localhost:8081/surgeries/count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allSurgeryCount = await response.json()
            setCountSurgery(allSurgeryCount.recordset)
        }
        fetchSurgeryCount()
    }, [])

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const getCurrentDateTime = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const dateTimeString = currentTime.toLocaleString('en-US', options);
        return dateTimeString;
    };


    return (
        <>
            <div className="dash-content">
                <div className="card-header">
                    {getCurrentDateTime().replace('at', '')}
                </div>
                <div className="card">
                    
                    <div className="card-body">
                        <FaCalendarAlt className="icon-dash" component={<Link to="appointments" />} />
                        {count.map((count, i) => (
                            <h1 key={i}>{count.appointmentsCount} Appointments</h1>
                        ))}
                        <p className="card-text">You can navigate through the sidebar to access your information</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <FaUserInjured className="icon-dash" />
                        {countPatient.map((countPatient, i) => (
                            <h1 key={i}>{countPatient.patientsCount} Patients</h1>
                        ))}
                        <p className="card-text">You can navigate through the sidebar to access your information</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <RiSurgicalMaskFill className="icon-dash" />
                        {countSurgery.map((countSurgery, i) => (
                            <h1 key={i}>{countSurgery.surgeriesCount} Surgeries</h1>
                        ))}
                        <p className="card-text">You can navigate through the sidebar to access your information</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Dashcontent;