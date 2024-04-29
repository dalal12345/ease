const Router = require('express').Router()
const Festivals = require('../models/festival')
const Events = require('../models/event')











//API for All festivals....
Router.get('/api/festivals/',async (req,res)=>{
    try{
       const allFestivals = await Festivals.find({})
       res.json({allFestivals})
    } catch (e) {
       res.json({e})
        console.log(e)
    }
})

//Fest Create Form.....
Router.get('/admin/create_fest/',async (req,res)=>{
    try{
        const allFestivals = await Festivals.find({}).sort({startDate:1})
        res.render('admin/create_fest',{allFestivals})
    } catch (e) {
        res.json({e})
        console.log(e)
    }

})

//Fest routes for user.....

Router.get('/user/festivals',async (req,res)=>{
    try{
        const allFestivals = await Festivals.find({}).sort({startDate:1})
        res.render('user/fest',{allFestivals})
    } catch (e) {
        res.json({e})
        console.log(e)
    }

})




//Fest create handle form
Router.post('/create_fest/',  async (req,res)=>{
    await Festivals.create(req.body)
    res.redirect('/admin/create_fest/')
})


module.exports = Router
