import sql from 'mssql';
import config from '../../model/config.js';

// LABORATORY
// get all tests
export const getTests = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`SELECT t.testName, t.testCost, d.departmentName
FROM Department.Tests t
JOIN Department.Departments d ON t.departmentId = d.departmentId;
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

// create test
export const createTests = async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('testName', sql.VarChar, req.body.testName)
            .input('testCost', sql.VarChar, req.body.testCost)
            .input('departmentId', sql.VarChar, req.body.departmentId)
            .query(`INSERT INTO Department.Tests (testName, testCost, departmentId)
VALUES (@testName, @testCost, @departmentId);`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};

// delete test
export const deleteTests = async (req, res) => {
    let connection;
    try {
        const { id } = req.params;
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM Department.Tests WHERE testId = @id;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};

// update test
export const updateTests = async (req, res) => {
    let connection;
    try {
        const { testName, testCost, departmentId } = req.body;
        const { id } = req.params;
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('testName', sql.VarChar, testName)
            .input('testCost', sql.VarChar, testCost)
            .input('departmentId', sql.VarChar, departmentId)
            .input('id', sql.Int, id)
            .query(`UPDATE Department.Tests
SET testName = @testName, testCost = @testCost, departmentId = @departmentId
WHERE testId = @id;`);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }
};

