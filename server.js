const express = require ("express");
const path = require ("path");
const bodyParser = require ('body-parser')
const nodemailer = require ('nodemailer')
const app = express();
const connectDB= require("./config/db");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.post('app/Form', (req, res) => {
    console.log(req.body)
})

connectDB();

app.use(express.json({ extended: false}));

// Routes 

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get("*", (req, res)=> {
        res.sendFile(path.resolve(_dirname, "client", 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});