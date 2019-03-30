const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index',{title:'Proyecto Logan'})
})

router.get('/contact',(req,res)=>{
    res.render('contact',{title:'Proyecto Logan - Contacto'})
})

module.exports=router