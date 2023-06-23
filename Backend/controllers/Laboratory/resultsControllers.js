import sql from 'mssql';
import config from '../../model/config.js';

// LABORATORY
// get all testresults
export const getTestResults = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`SELECT tr.resultId, 
        t.testName, 
        CONCAT(P.firstName, ' ', P.lastName) as patientName, 
        d.doctorId, 
        tr.resultDate, 
        tr.resultDetails
        FROM Department.TestResults tr
        JOIN Department.Tests t ON tr.testId = t.testId
        JOIN Employees.Doctors d ON tr.doctorId = d.doctorId
        JOIN Patients.Patients p ON tr.patientId = p.patientId;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    }
    finally {
        if (connection) {
            connection.close();
        }
    }
};

// update testresults
export const updateTestResults = async (req, res) => {
    let connection;
    try {
        const { id } = req.params;
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('resultId', sql.Int, id)
            .input('resultDetails', sql.VarChar, req.body.resultDetails)
            .query(`UPDATE Department.TestResults
            SET resultDetails = @resultDetails
            WHERE resultId = @resultId;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    }
    finally {
        if (connection) {
            connection.close();
        }
    }
}

// delete testresults
export const deleteTestResults = async (req, res) => {
    let connection;
    try {
        const { id } = req.params;
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('resultId', sql.Int, id)
            .query(`DELETE FROM Department.TestResults WHERE resultId = @resultId;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    }
    finally {
        if (connection) {
            connection.close();
        }
    }
}

// create testresults
export const createTestResults = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('testId', sql.Int, req.body.testId)
            .input('patientId', sql.Int, req.body.patientId)
            .input('doctorId', sql.Int, req.body.doctorId)
            .input('resultDate', sql.Date, req.body.resultDate)
            .input('resultDetails', sql.VarChar, req.body.resultDetails)
            .query(`INSERT INTO Department.TestResults (testId, patientId, doctorId, resultDate, resultDetails)
            VALUES (@testId, @patientId, @doctorId, @resultDate, @resultDetails);`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    }
    finally {
        if (connection) {
            connection.close();
        }
    }
}