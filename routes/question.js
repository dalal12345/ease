const Router = require('express').Router()
const Festivals = require("../models/festival");
const Questions = require('../models/question')




// //Create event for the fest....
// Router.get('admin/:festID/create_question/',async(req,res)=>{
//     const {festID} = req.params
//     const allQuestions = await Questions.find({parent_fest:festID})
//     res.render('admin/create_question',{festID,allQuestions})
// })

//Create fest...
//Fest Details...
Router.post('/admin/:festID/create_question/',async(req,res)=>{
    try {
        //catch festID from url
        const {festID} = req.params
        //Create new event
        const newQuestion = await Questions.create(req.body)
        //res.json({newQuestion})
        res.redirect(`/admin/${festID}/create_event/`)
    } catch (err) {
        console.log(err)
    }
})



module.exports = Router