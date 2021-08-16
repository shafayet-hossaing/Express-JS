const express = require('express');
const app = express();


// sending html data 
app.get("/", (req, res) => {
    res.write("<h1>Hello from the html data</h1>")
    res.write("<h1>Sending html data</h1>")
    res.send()
})

// Listening
app.listen(3000, () => {
    console.log("3000 is listening");
})