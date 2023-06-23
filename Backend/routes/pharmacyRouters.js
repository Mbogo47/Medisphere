import { createMedication, deleteMedication, getMedications, updateMedications } from "../controllers/Pharmacy/medicationControllers.js";
import { createPrescriptions, deletePrescriptions, getPrescriptions, updatePrescriptions } from "../controllers/Pharmacy/presControllers.js";

const pharmacyRoutes = (app) => {
    // PHARMACY
    // Prescription
    app.route('/pres')
        .get(getPrescriptions)
        .post(createPrescriptions)
    app.route('/pres/:id')
        .put(updatePrescriptions)
        .delete(deletePrescriptions);

    // Medication
    app.route('/medications')
        .get(getMedications)
        .post(createMedication)
    app.route('/medications/:id')
        .put(updateMedications)
        .delete(deleteMedication);
};

export default pharmacyRoutes;