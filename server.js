const express = require('express')
const app = express()
const ejs = require('ejs')

app.get('/greeting', (req,res) =>{
    res.send('Hello Stranger')
})
app.get('/greeting/:name', (req,res) =>{
    res.send('Wow! Hello there, ' + req.params.name)
})
app.get('/tip/:total/:tipPercentage', (req,res) =>{

    let total = parseInt(req.params.total);
    let tip = parseInt(req.params.tipPercentage);
    let tipTotal = parseInt('tip/total')
    res.send(tipTotal)
})

app.listen(3000, (req,res)=>{
    console.log("listening on 3000");
})
