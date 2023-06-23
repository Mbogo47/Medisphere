import { useEffect, useState } from 'react';
import '../styles/appt.css';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch('http://localhost:8081/appointments', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const allAppointments = await response.json();
            setAppointments(allAppointments.recordset);
        };
        fetchAppointments();
    }, []);

    const handleEdit = async (appointmentId) => {
        // Handle edit logic here
    };

    const handleDelete = async (appointmentId) => {
        // Handle delete logic here
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    if (appointments.length === 0) {
        return <div>Loading...</div>;
    }

    const currentAppointment = appointments[currentIndex];

    return (
        <div>
            <h1>Appointments</h1>
            <form>
                <div>
                    <label htmlFor="patientName">Patient Name</label>
                    <input type="text" id="patientName" value={currentAppointment.patientName} disabled />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="text" id="date" value={currentAppointment.appointmentDate} disabled />
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <input type="text" id="time" value={currentAppointment.appointmentTime} disabled />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <input type="text" id="status" value={currentAppointment.status} disabled />
                </div>
                <div>
                    <label htmlFor="doctorId">Doctor Id</label>
                    <input type="text" id="doctorId" value={currentAppointment.doctorId} disabled />
                </div>
                <div>
                    <label htmlFor="doctorName">Doctor Name</label>
                    <input type="text" id="doctorName" value={currentAppointment.doctorName} disabled />
                </div>
                <div>
                    <button onClick={handlePrevious} disabled={currentIndex === 0}>
                        Previous
                    </button>
                    <button onClick={handleNext} disabled={currentIndex === appointments.length - 1}>
                        Next
                    </button>
                    <button onClick={() => handleEdit(currentAppointment.appointmentId)} className="back">
                        <FaPencilAlt />
                    </button>
                    <button onClick={() => handleDelete(currentAppointment.appointmentId)} className="back">
                        <RiDeleteBinFill />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Appointments;
