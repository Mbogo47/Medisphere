import { getPatients } from "../controllers/controller.js";


const patientsRoutes = (app) => {
    app.route('/patients')
        .get(getPatients);
};

export default patientsRoutes;