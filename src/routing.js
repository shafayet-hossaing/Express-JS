const express = require('express');
const app = express();


// Home page 
app.get("/", (req, res) => {
    res.send("Welcome to home page")
})


// About page
app.get("/about", (req, res) => {
    res.send("Welcome to about page")
})


// Contact page
app.get("/contact", (req, res) => {
    res.send("Welcome to contact page")
})


// Temp page
app.get("/temp", (req, res) => {
    res.send("Welcome to temp page")
})


// Listening
app.listen(3000, () => {
    console.log("3000 is listening");
})