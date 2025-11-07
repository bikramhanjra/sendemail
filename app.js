const express = require("express");
const app = express();
const mail = require("./mail")

app.get("/", (req, res) =>{
    res.send("it is mailer")
})

app.get("/sendmail", mail)

app.listen(5000, ()=>console.log("server started"))