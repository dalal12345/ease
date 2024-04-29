const Router = require('express').Router()
const Events = require('../models/event')
const Files = require("../models/file");





//Create files
Router.post('/admin/:eventID/create_file/',async(req,res)=>{
    try {

        //Create new event
        const newFiles = await Files.create(req.body)
        //Extract new event ID...
        res.json(newFiles)
    } catch (err) {
        console.log(err)
    }
})



module.exports = Router