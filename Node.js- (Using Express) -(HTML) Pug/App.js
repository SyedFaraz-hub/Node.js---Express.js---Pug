const { static } = require('express');
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();
const port = 80;



// static file
app.use('/static', express.static('static'));
app.use(express.urlencoded()); 

// Pug installation
app.set('view engine', 'pug')
app.set('/views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render("index.pug");
})
app.post('/', (req,res)=>{
    const name = req.body.name;  
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    let newAdmission = (`The Admission of ${name} age: ${age} Gender: ${gender} Residing At: ${address} is Confirmed And Succesfully Saved in our Database`)
    fs.writeFileSync("newAdmission.txt", newAdmission);
    res.render("index.pug");
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});


