import { getUnpaid } from "../controllers/Finance/financeControllers.js";

const financeRoutes = (app) => {
    // FINANCE
    // Unpaid
    app.route('/unpaid')
        .get(getUnpaid)
};

export default financeRoutes;