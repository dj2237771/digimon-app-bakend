"use strict";

const express = require("express");
const digimonRouter = express.Router();
const digimonHandlers = require("../controllers/digimon");

// GET: localhost:3001/digimonapi
digimonRouter.get("/digimonapi", digimonHandlers.getDigimonAPIHandler);
// GET: localhost:3001/digimon
digimonRouter.get("/digimon", digimonHandlers.getDigimonsHandaler);

// POST: localhost:3001.digimonapi
// {
//     "name": "Motimon",
//     "img": "https://digimon.shadowsmith.com/img/motimon.jpg",
//     "level": "In Training"
//     }
digimonRouter.post("/digimon", digimonHandlers.addDigimonHandler);

digimonRouter.put("/digimon/:id", digimonHandlers.updateDigimonHandler);
digimonRouter.delete("/digimon/:id", digimonHandlers.deleteDigimonHandler);

module.exports = digimonRouter;
