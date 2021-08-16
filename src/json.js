// The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.

const express = require('express');
const app = express();
const port = 2000


// json data sending
app.get("/", (req, res) => {

    // Sending json data by object
    res.json({ // instead of send we also can use res.json()  && json can work for non-object as well
        id : 123,
        name : "Shafayet",
        college : "Savar college"
    })
})


// json data as array of an object
app.get("/array", (req, res) => {

    // Sending json data by object
    res.json([{ // instead of send we also can use res.json() && json can work for non-object as well
        id : 123,
        name : "Shafayet",
        college : "Savar college"
    }])
})


// Listening
app.listen(port, () => {
    console.log(`Listening ${port}`);
})