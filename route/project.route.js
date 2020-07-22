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
  const { title, link, image } = req.body;
  try {
    const project = await Project.create({
      title,
      link,
      image,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = project;
