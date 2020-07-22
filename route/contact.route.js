const express = require('express')
const contact = express.Router()
const Contact = require('../model/Contact')

contact.get('/', async(req,res)=>{
    try {
        const contact = Contact.findAll()
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json(err)
    }
})

module.exports = contact