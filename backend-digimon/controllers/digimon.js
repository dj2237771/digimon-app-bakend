"use strict";

const axios = require("axios");
const digimonModel = require("../models/digimon");

async function getDigimonAPIHandler(req, res) {
  let allDigimons = await axios.get(
    "https://digimon-api.vercel.app/api/digimon"
  );
  res.send(allDigimons.data);
}
async function getDigimonsHandaler(req, res) {
  let allDigimons = await digimonModel.find({});
  res.send(allDigimons);
}
async function addDigimonHandler(req, res) {
  const { name, img, level } = req.body;
  let newDigimon = await digimonModel.create({
    digimonName: name,
    digimonLevel: level,
    digimonImg: img,
  });
  res.send(newDigimon);
}

async function deleteDigimonHandler(req, res) {
  const id = req.params.id;
  let deletedDigimon = await digimonModel.findByIdANDDelete(id);
  console.log(deletedDigimon);
  let allDigimons = await digimonModel.find({});
  res.send(allDigimons);
}

async function updateDigimonHandler(req, res) {
  const id = req.params.id;
  const { digimonName, digimonLevel, digimonImg } = req.body;
  let updatedDigimon = await digimonModel.findByIdAndUpdate(id, {
    digimonName,
    digimonLevel,
    digimonImg,
  });
  res.send(updatedDigimon);
}
module.exports = {
  getDigimonAPIHandler,
  getDigimonsHandaler,
  addDigimonHandler,
  deleteDigimonHandler,
  updateDigimonHandler,
};
