const express = require("express");

const app = express();


const firstName = "Harvey Dave"
const lastName = "de Gracia"
const age = "20"
const schoolemail = "hamo.degracia.swu@phinmaed.com"

app.get('/firstname',(req,res)=>{   
    res.status(200).send(firstName)
})

app.get('/lastname',(req,res)=>{
    res.status(200).send(lastName)
})

app.get('/age',(req,res)=>{
    res.status(200).send(age)
})

app.get('/schoolemail',(req,res)=>{
    res.status(200).send(schoolemail)
})

app.get("/mydata",(req,res)=>{
    const data = {
        "firstname":(firstName),
        "lastname": (lastName),
        "age":(age),
        "school_email":(schoolemail),
    }
    res.status(200).send(data)
})

app.listen(3000);