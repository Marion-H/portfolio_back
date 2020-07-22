const express = require("express");
const formation = express.Router();

const Formation = require("../model/Formation");

formation.get("/", async (req, res) => {
  try {
    const formations = await Formation.findAll();
    res.status(200).json(formations);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = formation;
