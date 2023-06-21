import { getAppointments, getDepartments, getMedicalHistory, getPatients, getPrescription, getUnpaid } from "../controllers/patientController.js";


const patientsRoutes = (app) => {
    app.route('/patients')
        .get(getPatients);
    app.route('/pres')
        .get(getPrescription);
    app.route('/history')
        .get(getMedicalHistory);
    app.route('/appointments')
        .get(getAppointments)
    app.route('/unpaid')
        .get(getUnpaid)
    app.route('/departments')
        .get(getDepartments)
};

export default patientsRoutes;