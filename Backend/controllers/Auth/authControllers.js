import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sql from 'mssql';
import config from '../../model/config.js';

export const registerUser = async (req, res) => {
    const { fullName, password, email, department, appointmentDate, appointmentTime } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request()
            .input('fullName', sql.NVarChar, fullName)
            .input('password', sql.NVarChar, hashedPassword)
            .input('email', sql.NVarChar, email)
            // .input('department', sql.NVarChar, department)
            // .input('appointmentDate', sql.NVarChar, appointmentDate)
            // .input('appointmentTime', sql.NVarChar, appointmentTime)
            .query(`INSERT INTO Patients.Patients (fullName, password, email ) VALUES (@fullName, @password, @email)`);
        res.send("user created successfully");
    }
    catch (error) {
        res.status(500).json({ error });
    }
    finally {
        if (connection) {
            connection.close();
        }
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    let connection;
    try {
        connection = await sql.connect(config.sql);
        const result = await connection.request().query(`
        SELECT * FROM Patients.Patients WHERE email = '${email}'`);
        const user = result.recordset[0];
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return res.status(400).json({ message: 'Invalid credentials' });
            } else {
                const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, config.jwt_secret)}`;
                res.status(200).json({ email: user.email, username: user.username, id: user.id, token: token });
            }
        }
        res.send(result);
    } catch (error) {
        res.status(500).json({ error });
    } finally {
        if (connection) {
            connection.close();
        }
    }


};

