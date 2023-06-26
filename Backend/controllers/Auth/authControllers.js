import sql from 'mssql';
import config from '../../model/config.js';

// export const registerUser = async (req, res) => {

//     let connection;

//     try {
//         connection = await sql.connect(config.sql);
//         const result = await connection.request().query(``);
//         res.send(result);
//     } catch (error) {
//         res.status(500).json({ error });
//     } finally {
//         if (connection) {
//             connection.close();
//         }
//     }
// };
export const registerUser = async (req, res) => {
    const { fullName, password, email, department, appointmentDate, appointmentTime } = req.body;
    
};

export const loginUser = async (req, res) => {

    res.send("loginUser");
};


// export const loginUser = async (req, res) => {

//     let connection;

//     try {
//         connection = await sql.connect(config.sql);
//         const result = await connection.request().query(``);
//         res.send(result);
//     } catch (error) {
//         res.status(500).json({ error });
//     } finally {
//         if (connection) {
//             connection.close();
//         }
//     }
// };
