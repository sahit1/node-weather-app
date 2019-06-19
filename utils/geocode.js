const request = require('request')
geocoding = (address ,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoieGVlbm8wIiwiYSI6ImNqd3V5c3QwbTAzYnk0OHJ6ZG1tcXV4OHkifQ.5XIS4SnT9Tij4i7wBtXi2w"
    request({url : url , json : true} , (err , res)=>{
       if(err){
          callback('Unable to connect...check your network and try again!!!' , undefined)
       }else if(res.body.features.length == 0){
          callback("unable to find given location...try again with another location", undefined)
       }else{
         const data ={
   
             latitude:res.body.features[0].center[0],
             longitude : res.body.features[0].center[1],
             location : res.body.features[0].place_name
          }
          callback(undefined,data)
       }
    })

 }
module.exports = geocoding