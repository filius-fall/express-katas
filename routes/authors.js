const express = require('express')
const router = express.Router()




const Author = require('../models/author')


router.get('/',(req,res) => {
    const get_data = Author.find({name:'k'},"name id",(err,data) => {
        console.log(data,"Database data")
    })
    // console.log(get_data)
    res.render('authors/index')
})

router.get('/new',(req,res) => {
    res.render('authors/new',{author : new Author()})
})

router.post('/',(req,res) => {
    const new_author = new Author({
        name: req.body.name
    })
    console.log(req.body.name)
    new_author.save((err,newAuthor) => {
        if(err){
            res.send("extra data")
        }
        else{
            let k = 'old_data' + newAuthor
            res.send(k)
        }
    })
    // res.render('authors/index',{author : req.body.name})
    // const data = Author.find({})
    // console.log(data)
    // for(i in data){
    //     console.log(i.name,"DD")
    // }
    // new_author.save()
    // res.send(req.body.name)
    
})

module.exports = router