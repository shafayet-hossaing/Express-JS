const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 5000


const templatesPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')


app.set('view engine', 'hbs')
app.set('views', templatesPath)
hbs.registerPartials(partialsPath)

app.get("/", function (req, res) {
    res.render('index',{
        firstName : "Shafayet", // Dynamically passing the name
        lastName : "Hossain"
    })
})





app.listen(port,()=> {
    console.log(`listening to ${port}`);
})