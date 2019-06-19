const request = require('request')
const weather = (lat,long,callback)=>{
    var url = 'https://api.darksky.net/forecast/28ed04c62e65550f1933e43b50a46424/'+lat+','+long
    request({url:url , json:true} ,(err,{body})=>{
        if(err){
            callback('Check your network and try again!!!')
        }else if(body.error){
            callback('Given location is invalid')
        }else{
            var data={  
                temperature : body.currently.temperature,
                summary :body.currently.summary
            }
            callback(undefined,data)
        }
    })
}
module.exports = weather