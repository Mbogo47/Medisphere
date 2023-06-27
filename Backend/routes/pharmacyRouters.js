import { createMedication, deleteMedication, getMedications, updateMedications } from "../controllers/Pharmacy/medicationControllers.js";
import { createPrescriptions, deletePrescriptions, getPrescriptions, updatePrescriptions } from "../controllers/Pharmacy/presControllers.js";

const pharmacyRoutes = (app) => {
    // PHARMACY
    // Prescription
    app.route('/pres')
        .post(createPrescriptions)
        .get(getPrescriptions)
    app.route('/pres/:id')
        .put(updatePrescriptions)
        .delete(deletePrescriptions);

    // Medication
    app.route('/medications')
        .post(createMedication)
        .get(getMedications)
    app.route('/medications/:id')
        .put(updateMedications)
        .delete(deleteMedication);
};

export default pharmacyRoutes;