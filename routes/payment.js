const Router = require('express').Router()
const Events = require('../models/event')
const Payments = require("../models/payment");



// //API for All festivals....
// Router.get('/api/payments/',async (req,res)=>{
//     try{
//         const allPayments = await Payments.find({})
//         res.json({allPayments})
//     } catch (e) {
//         res.json({e})
//         console.log(e)
//     }
// })

// //Create event for the fest....
// Router.get('/:eventID/create_payment/',(req,res)=>{
//     const {eventID} = req.params
//     res.render('create_payment',{eventID})
// })

//Create Payment...

Router.post('/admin/:eventID/create_payment/',async(req,res)=>{
    try {
        //catch festID from url
        const {eventID} = req.params
        //Create new event
        const newPaymentInfo = await Payments.create(req.body)
        res.redirect(`/admin/${eventID}/create_event_item/`)
    } catch (err) {
        console.log(err)
    }
})



module.exports = Router