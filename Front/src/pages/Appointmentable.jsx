import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import '../styles/appt.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

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

    // EDIT AND DELETE BUTTONS
    useEffect(() => {
        const handleEdit = async (appointmentId) => {
            const response = await fetch('http://localhost:8081/appointments', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            const allAppointments = await response.json();
            setAppointments(allAppointments.recordset);
        };
        handleEdit();
    }, []);

    useEffect(() => {
        const handleDelete = async (appointmentId) => {
            const response = await fetch('http://localhost:8081/appointments', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const allAppointments = await response.json();
            setAppointments(allAppointments.recordset);
        };
        handleDelete();
    }, []);


    return (
        <div>
            <h1>Appointments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Doctor Id</th>
                        <th>Doctor Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, i) => (
                        <tr key={i}>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.appointmentDate}</td>
                            <td>{appointment.appointmentTime}</td>
                            <td>{appointment.status}</td>
                            <td>{appointment.doctorId}</td>
                            <td>{appointment.doctorName}</td>
                            <td>
                                <button onClick={() => handleEdit(appointment.appointmentId)} className='back'>
                                    <FaPencilAlt />
                                </button>
                                <button onClick={() => handleDelete(appointment.appointmentId)} className='back'>
                                    <RiDeleteBinFill />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;