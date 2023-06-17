import express from "express";
import config from "./model/config.js";
import patientsRoutes from "./routes/routers.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

patientsRoutes(app);

app.get("/", (req, res) => {
    res.send("Welcome to medisphere");
});

app.listen(config.port, () => {
    console.log(`Server running at ${config.url}`);
});