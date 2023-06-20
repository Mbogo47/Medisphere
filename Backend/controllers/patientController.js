import sql from 'mssql';
import config from '../model/config.js';

// get all patients
export const getPatients = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query('SELECT * FROM Patients.Patients');
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};

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

// get all medical history of all patients
export const getMedicalHistory = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`SELECT
	mr.recordId,
	p.patientId,
    CONCAT(p.firstName, ' ', p.lastName) AS patientName,
    mr.diagnosis,
    d.doctorId,
    CONCAT(d.firstName, ' ', d.lastName) AS doctorName
FROM
    Patients.Patients p
    JOIN Patients.MedicalRecords mr ON p.patientId = mr.patientId
    JOIN Employees.Doctors d ON mr.doctorId = d.doctorId;

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

// get all appointments of a doctor by doctorId
export const getAppointments = async (req, res) => {

    let connection;

    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`
            SELECT
                a.appointmentId,
                a.appointmentDate,
                a.appointmentTime,
                a.status
            FROM
                Patients.Appointments a
            WHERE
                a.doctorId = @doctorId;
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

// get all unpaid bills of a patient 
export const getUnpaid = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`
            SELECT p.firstName, p.lastName, b.billDate, b.amountDue
FROM Patients.Patients p
INNER JOIN Patients.Billing b ON p.patientId = b.patientId
WHERE b.paymentStatus = 'Unpaid';

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

// get all departments
export const getDepartments = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query('SELECT departmentName  FROM Department.Departments');
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
}
