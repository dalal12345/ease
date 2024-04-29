const express = require('express');
const mongoose = require('mongoose');
const app = express();
//Authentication.....
const adminScheme = require('./database/admin.model')
const MongoDBStore = require('connect-mongodb-session')(session);

//Mongodb Connection....
mongoose.connect('mongodb://localhost:27017/festDB');

//form handler...
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//View Engine setup....
app.set('view engine', 'ejs');

//Static files serve.....
app.use(express.static('public'));

//Session middleware
app.use(session({
    secret: 'my demo one for iut', 
    resave: false,
    saveUninitialized: false
}));

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Import routes.......
const FestivalRouter = require('./routes/festival')
const EventRouter = require('./routes/event')
const FileRouter = require('./routes/file')
const QuestionRouter = require('./routes/question')
const PaymentRouter = require('./routes/payment')
const PaymentProcessRouter = require('./routes/paymentProcess')
const RuleRouter = require('./routes/rule')

// Use routes
app.use('/',FestivalRouter)
app.use('/',EventRouter)
app.use('/',FileRouter)
app.use('/',QuestionRouter)
app.use('/',PaymentRouter)
app.use('/',PaymentProcessRouter)
app.use('/',RuleRouter)



// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await adminScheme.findOne({ email });
    console.log(user)

    if (user && user.password === password) { // Replace with proper password check
        req.session.user = user;
        res.redirect('/admin/create-fest');
    } else {
        res.redirect('/');
    }
});


// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


