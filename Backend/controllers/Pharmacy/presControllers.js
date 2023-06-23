import sql from 'mssql';
import config from '../../model/config.js';

// PRESCRIPTIONS
// get all prescriptions
export const getPrescriptions = async (req, res) => {
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

// add prescription
export const createPrescriptions = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('appointmentId', sql.Int, req.body.appointmentId)
            .input('medicationId', sql.Int, req.body.medicationId)
            .query(`INSERT INTO Patients.Prescriptions (appointmentId, medicationId)
VALUES (@appointmentId, @medicationId);`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// delete prescription
export const deletePrescriptions = async (req, res) => {
    let connection;
    try {
        const { id } = req.params;
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Patients.Prescriptions WHERE prescriptionId = @id;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// update prescription
export const updatePrescriptions = async (req, res) => {
    let connection;
    try {
        const { appointmentId, medicationId } = req.body;
        const { id } = req.params;
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('appointmentId', sql.Int, appointmentId)
            .input('medicationId', sql.Int, medicationId)
            .input('id', sql.Int, id)
            .query(`UPDATE Patients.Prescriptions
SET appointmentId = @appointmentId, medicationId = @medicationId
WHERE prescriptionId = @id;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};

