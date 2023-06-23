import sql from 'mssql';
import config from '../../model/config.js';


// get all unpaid bills of a patient 
export const getUnpaid = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`
            SELECT CONCAT(P.firstName, ' ', P.lastName) AS patientName,
            b.billDate, b.amountDue
            FROM Patients.Patients p
            INNER JOIN Patients.Billing b ON p.patientId = b.patientId
            WHERE b.paymentStatus = 'Unpaid'; `);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};