const path = require('path')

const express = require('express')
const request = require('request')

var public  = path.join(__dirname , '../public')
const geocode = require('../utils/geocode')
const forecast = require('../utils/weather.js')

var app = express()
app.use(express.static(public))
app.set('view engine' , 'hbs')
app.get('' , (req,res)=>{
    res.render('index',{
        title :'Weather'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address || req.query.address == "")
        return res.send({
            error : 'invalid address '
        })
        var address = req.query.address;
         geocode(address,(err , data)=>{
            if(err) return res.send("ERROR!! "+err)
            forecast(data.latitude , data.longitude,(err,{temperature,summary} ={})=>{
                if(err)
                    return res.send("Error!! " +err)
                res.send({
                    Location :data.location,
                    summary,
                    temperature
                })
            })
            
        })
 
})
app.listen(3000 , ()=>{
    console.log("Server started on port 3000")
})