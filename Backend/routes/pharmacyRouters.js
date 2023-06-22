import { createMedication, deleteMedication, getMedications, updateMedications } from "../controllers/Pharmacy/medicationControllers.js";
import { getPrescription } from "../controllers/Pharmacy/prescriptionControllers.js";

const pharmacyRoutes = (app) => {
    // PHARMACY
    // Prescription
    app.route('/pres')
        .get(getPrescription)

    // Medication
    app.route('/medications')
        .get(getMedications)
        .post(createMedication)
    app.route('/medications/:id')
        .put(updateMedications)
        .delete(deleteMedication);
};

export default pharmacyRoutes;