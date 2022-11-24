const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render('index',{title:'This is first title'})
})


router.get('/second',(req,res) => {
    res.render('second',{title : 'Second URL',layout:'../views/layouts/second_layout'})
})

module.exports = router