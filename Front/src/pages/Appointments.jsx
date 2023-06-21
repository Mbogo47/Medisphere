import { useEffect, useState } from 'react';
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
            })
            const allAppointments = await response.json()
            setAppointments(allAppointments.recordset)
        }
        fetchAppointments()
    }, [])

    return (
        <div >
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
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Appointments