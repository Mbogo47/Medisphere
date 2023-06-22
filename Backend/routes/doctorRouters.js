import { getAppointments } from "../controllers/Doctor/appointmentController.js";
import { getMedicalHistory } from "../controllers/Doctor/historyControllers.js";
import { getDepartments, getPatients } from "../controllers/Patient/patientController.js";

const doctorRoutes = (app) => {
    app.route('/patients')
        .get(getPatients);
    app.route('/departments')
        .get(getDepartments);

    // DOCTOR
    // Medical History
    app.route('/history')
        .get(getMedicalHistory);

    // Appointments
    app.route('/appointments')
        .get(getAppointments)



};

export default doctorRoutes;