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

formation.post("/", async (req, res) => {
  const { school, diploma, year, description } = req.body;
  try {
    const formation = await Formation.create({
      school,
      diploma,
      year,
      description,
    });
    res.status(201).json(formation);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = formation;
