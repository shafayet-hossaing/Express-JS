const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Hello from the express")
})

// Listing in 6000 port
app.listen(2000, () => {
    console.log("Listening to 2000 port");
})