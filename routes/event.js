const Router = require('express').Router()
const Events = require('../models/event')
const Festivals = require("../models/festival");
const Rules = require('../models/rule')
const Payment = require('../models/payment')
const File = require('../models/file')
const Question = require('../models/question')



//API for All festivals....
Router.get('/api/events/',async (req,res)=>{
    try{
        const allEvents = await Events.find({})
        res.json({allEvents})
    } catch (e) {
        res.json({e})
        console.log(e)
    }
})

//Event Details
//View for festival details
Router.get('/api/details/:eventID/',async (req,res)=>{
    try{
        const  {eventID} = req.params
        const currentFestival = await Festivals.findById(eventID)
        const allEvents = await Events.find({})
        //log
        console.log(currentFestival)
        res.render('user/event_details',{currentFestival,allEvents})
    } catch (e) {
        res.json({e})
        console.log(e)
    }
})




//Create event for the fest....
Router.get('/admin/:festID/create_event/',async (req,res)=>{

    try {
        const {festID} = req.params
        const allQuestions = await Question.find({parent_fest: festID})
        const allEvents = await Events.find({parent_fest: festID})
        res.render('admin/create_event',{festID,allEvents,allQuestions})
    } catch (err) {
        console.log(err)
    }
})

//Gets events and questions.....
Router.get('/user/:festID/events_questions/',async (req,res)=>{

    try {
        const {festID} = req.params
        const allQuestions = await Question.find({parent_fest: festID})
        const allEvents = await Events.find({parent_fest: festID})
        res.render('user/events_questions',{festID,allEvents,allQuestions})
    } catch (err) {
        console.log(err)
    }
})





//Create event items for the fest....
Router.get('/admin/:eventID/create_event_item/',async (req,res)=>{

    try {
        const {eventID} = req.params
        const allRules = await Rules.find({parent_event: eventID})
        const allPayments = await Payment.find({parent_event: eventID})
        const allFiles = await File.find({parent_event: eventID})
        res.render('admin/create_event_item',{eventID,allPayments,allFiles,allRules})
        //res.send('Working')
    } catch (err) {
        console.log(err)
    }
})


//View events items....
Router.get('/user/:eventID/event_item/',async (req,res)=>{

    try {
        const {eventID} = req.params
        const allRules = await Rules.find({parent_event: eventID})
        const allPayments = await Payment.find({parent_event: eventID})
        const allFiles = await File.find({parent_event: eventID})
        res.render('user/event_items',{eventID,allPayments,allFiles,allRules})
    } catch (err) {
        console.log(err)
    }
})



//Create new event....
Router.post('/admin/:festID/create_event/',async(req,res)=>{
    try {
        const {festID} = req.params
        //Create new event
        const newEvent = await Events.create(req.body)
        res.redirect(`/admin/${festID}/create_event/`)
    } catch (err) {
        console.log(err)
    }
})



module.exports = Router