import cors from "cors";
import express from "express";
import config from "./model/config.js";
import doctorRoutes from "./routes/doctorRouters.js";
import pharmacyRoutes from "./routes/pharmacyRouters.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
doctorRoutes(app);
pharmacyRoutes(app);

app.get("/", (req, res) => {
    res.send("Welcome to medisphere");
});

app.listen(config.port, () => {
    console.log(`Server running at ${config.url}`);
});