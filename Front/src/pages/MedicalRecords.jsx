import { useEffect, useState } from 'react';
import '../styles/appt.css';

const Medical = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch('http://localhost:8081/history', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allRecords = await response.json()
            setRecords(allRecords.recordset)
        }
        fetchRecords()
    }, [])

    return (
        <div >
            <h1>Medical History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Diagnosis</th>
                        <th>Doctor Id</th>
                        <th>Doctor Name</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, recordId) => (
                        <tr key={recordId}>
                            <td>{record.patientId}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.diagnosis}</td>
                            <td>{appointment.doctorId}</td>
                            <td>{appointment.doctorName}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Medical