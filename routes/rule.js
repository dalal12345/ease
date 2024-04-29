const Router = require('express').Router()
const Events = require('../models/event')
const Rules = require("../models/rule");


//POST Rules
Router.post('/admin/:eventID/create_rule/',async(req,res)=>{
    try {
        const {eventID} = req.params
        const newRule = await Rules.create(req.body)
        //res.json(newRule)
        res.redirect(`/admin/${eventID}/create_event_item/`)
    } catch (err) {
        console.log(err)
    }
})



module.exports = Router