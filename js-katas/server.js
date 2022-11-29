const express = require('express')
const app = express()


function t(req,res,next){
    setTimeout(() => {
        console.log('Timeout')
        next()
    },5000)
    
}

app.get('/',t,(req,res) => {
    res.send(JSON.stringify({'Message':'This is delayed response'}))
    
})

app.listen(4000)