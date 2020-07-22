const express = require("express");
const contact = express.Router();
const Contact = require("../model/Contact");

contact.get("/", async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json(err);
  }
});

contact.post("/", async (req, res) => {
  const { name, link, logo } = req.body;
  try {
    const contact = await Contact.create({
      name,
      link,
      logo,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(422).json(error);
  }
});

contact.put("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const { name, link, logo } = req.body;
  try {
    await Contact.update({ name, link, logo }, { where: { uuid } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = contact;
