const express = require("express");

const app = express();

const subject = "ITE354"

const exam = "P2"

const node = "NODEJS"


app.get("/",(req,res)=>{
    res.status(200).send("Hello Welcome")
})

app.get('/subject',(req,res)=>{   
    res.status(200).send(subject)
})

app.get('/exam',(req,res)=>{
    res.status(200).send(exam)
})

app.get('/NODE',(req,res)=>{
    res.status(200).send(node)
})



app.get("/mydata",(req,res)=>{
    const data = {
        subject,
        "exam": (exam),
        "node":(node),
       
    }
    res.status(200).send(data)
})

app.listen(3000);