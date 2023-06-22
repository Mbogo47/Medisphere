import sql from 'mssql';
import config from '../../model/config.js';

// PRESCRIPTIONS
// get all prescriptions
export const getPrescription = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`SELECT p.patientId, CONCAT(p.firstName, ' ', p.lastName) AS patientName, ap.appointmentId, pr.medicine
FROM Patients.Patients p
JOIN Patients.Appointments ap ON p.patientId = ap.patientId
JOIN Patients.Prescriptions pr ON ap.appointmentId = pr.appointmentId
JOIN Department.Medications m ON pr.medicationId = m.medicationId;
`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};

// 