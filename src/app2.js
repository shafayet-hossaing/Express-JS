const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Hello from the express")
})

// About page
app.get("/about", (req, res) => {
    res.send("Hello from the about page")
})

// Listing in 6000 port
app.listen(2000, () => {
    console.log("Listening to 2000 port");
})