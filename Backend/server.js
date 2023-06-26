import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import config from "./model/config.js";
import authRouters from "./routes/authRouters.js";
import doctorRoutes from "./routes/doctorRouters.js";
import labRoutes from "./routes/labRouters.js";
import patientRoutes from "./routes/patientRouter.js";
import pharmacyRoutes from "./routes/pharmacyRouters.js";
import surgeryRoutes from "./routes/surgeryRouters.js";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
doctorRoutes(app);
pharmacyRoutes(app);
labRoutes(app);
patientRoutes(app);
surgeryRoutes(app);
authRouters(app);

app.get("/", (req, res) => {
    res.send("Welcome to medisphere");
});

app.listen(config.port, () => {
    console.log(`Server running at ${config.url}`);
});