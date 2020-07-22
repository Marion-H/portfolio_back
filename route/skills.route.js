const express = require("express");
const skills = express.Router();
const Skills = require("../model/Skills");

skills.get("/", async (req, res) => {
  try {
    const skills = await Skills.findAll();
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json(error);
  }
});

skills.post("/", async (req, res) => {
  const { name, description, logo } = req.body;
  try {
    const skill = await Skills.create({
      name,
      description,
      logo,
    });
    res.status(201).json(skill);
  } catch (error) {
    res.status(422).json(error);
  }
});

skills.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    const skill = await Skills.findByPk(uuid);
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json(error);
  }
});

skills.put("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const { name, description, logo } = req.body;
  try {
    await Skills.update({ name, description, logo }, { where: { uuid } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
});

skills.delete("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    await Skills.destroy({ where: { uuid } });
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
});

module.exports = skills;
