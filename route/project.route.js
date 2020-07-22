const express = require("express");
const project = express.Router();

const Project = require("../model/Project");

project.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json(error);
  }
});

project.post("/", async (req, res) => {
  const { title, link, image, description, year } = req.body;
  try {
    const project = await Project.create({
      title,
      link,
      image,
      description,
      year,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(422).json(error);
  }
});

project.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    const project = await Project.findByPk(uuid);
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json(error);
  }
});

project.put("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const { title, link, image, description, year } = req.body;
  try {
    await Project.update({ title, link, image , description, year}, { where: { uuid } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
});

project.delete("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    await Project.destroy({ where: { uuid } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = project;
