import sql from 'mssql';
import config from '../../model/config.js';

// get all appointments of a doctor by doctorId
export const getAppointments = async (req, res) => {

    let connection;

    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`
               SELECT
   CONCAT(P.firstName, ' ', P.lastName) AS patientName,
  A.appointmentDate,
  A.appointmentTime,
  A.status,
 D.doctorId,
 CONCAT(D.firstName, ' ', D.lastName) AS doctorName
FROM
  Patients.Appointments A
  JOIN Patients.Patients P ON A.patientId = P.patientId
  JOIN Employees.Doctors D ON A.doctorId = D.doctorId;  `);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};
