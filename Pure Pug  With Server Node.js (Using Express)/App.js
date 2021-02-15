const express = require('express');
const path = require('path');
const app = express();
const port = 80;


// Setup for reading static files
app.use('/static',express.static('static') );
app.use(express.urlencoded());

// Setup for view folder files
app.set('view engine', 'pug')
app.set('/views',path.join(__dirname,'views'))


app.get('/', (req,res)=>{
    res.render('index.pug')
})
app.get('/contact', (req,res)=>{
    res.render('contact.pug')
})


app.listen(port, ()=>{
    console.log("Server is Running on port 80");
})