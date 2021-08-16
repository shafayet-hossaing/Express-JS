const express = require('express');
const app = express();
const port = 5000


app.set('view engine', 'hbs')

app.get("/", function (req, res) {
    res.render('index',{
        firstName : "Shafayet", // Dynamically passing the name
        lastName : "Hossain"
    })
})





app.listen(port,()=> {
    console.log(`listening to ${port}`);
})