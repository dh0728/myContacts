const express = require('express');
const router = express.Router();

router
.route('/')
.get((req,res)=>{res.status(200).send("Contacts page")})
.post((req,res)=>{res.status(201).send("Create page")})

router
.route('/:id')
.get((req,res)=>{res.status(200).send(`view: ${req.params.id}`)})
.put((req,res)=>{res.status(200).send(`update: ${req.params.id}`)})
.delete((req,res)=>{res.status(200).send(`delete: ${req.params.id}`)})

module.exports = router;