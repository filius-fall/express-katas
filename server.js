const express = require("express");
const app = express()
const mongo = require('mongoose')

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

const expressLayout = require('express-ejs-layouts')

app.set('views',__dirname + '/views')
app.set('view engine','ejs')
app.set('layout','layouts/first_layout')




const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.use(expressLayout)
app.use(express.static('public'))

app.use('/',indexRouter)
app.use('/authors',authorRouter)


mongo.connect(process.env.DATABASE_URI,{useNewUrlParser:true})

const db = mongo.connection
db.on('error',(err) => console.log(err))
db.once('open',() => console.log("Connection Established"))
app.listen(process.env.PORT || 3000)
