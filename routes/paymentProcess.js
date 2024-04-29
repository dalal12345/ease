const Router = require('express').Router()
const PaymentProcess = require("../models/paymentprocess");



// //API for All festivals....
// Router.get('/api/payment_processes/',async (req,res)=>{
//     try{
//         const allPaymentProcess = await PaymentProcess.find({})
//         res.json({allPaymentProcess})
//     } catch (e) {
//         res.json({e})
//         console.log(e)
//     }
// })

// //Create event for the fest....
// Router.get('/:paymentID/create_payment_process/',(req,res)=>{
//     const {paymentID} = req.params
//     res.render('create_payment_process',{paymentID})
// })

//Create fest...
//Payment process create form ......
Router.get('/admin/:paymentID/create_payment_process/',async(req,res)=>{
    try {
        //catch festID from url
        const {paymentID} = req.params
        const allPaymentProcess = await PaymentProcess.find({parent_payment:paymentID})
        //Create new event
        res.render('admin/create_payment_process',{allPaymentProcess,paymentID})
    } catch (err) {
        console.log(err)
    }
})

//View payment process.....
Router.get('/user/:paymentID/payment_process/',async(req,res)=>{
    try {
        //catch festID from url
        const {paymentID} = req.params
        const allPaymentProcess = await PaymentProcess.find({parent_payment:paymentID})
        //Show payment process....
        res.render('user/payment_process',{allPaymentProcess,paymentID})
    } catch (err) {
        console.log(err)
    }
})



//Payment process post......
Router.post('/admin/:paymentID/create_payment_process/',async(req,res)=>{
    try {
        //catch festID from url
        const {paymentID} = req.params
        PaymentProcess.create(req.body)
        res.redirect(`/admin/${paymentID}/create_payment_process/`)
    } catch (err) {
        console.log(err)
    }
})


module.exports = Router