import { createTestResults, deleteTestResults, getTestResults, updateTestResults } from "../controllers/Laboratory/resultsControllers.js";
import { createTests, deleteTests, getTests, updateTests } from "../controllers/Laboratory/testsControllers.js";

const labRoutes = (app) => {
    // LABORATORY
    // Tests
    app.route('/tests')
        .get(getTests)
        .post(createTests)
    app.route('/tests/:id')
        .delete(deleteTests)
        .put(updateTests)

    // Test Results
    app.route('/testresults')
        .get(getTestResults)
        .post(createTestResults)
    app.route('/testresults/:id')
        .delete(deleteTestResults)
        .put(updateTestResults)

}

export default labRoutes;