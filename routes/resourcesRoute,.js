const express = require('express')
router = express.Router()

const db = require('../models/resourcesModel')

router.get("/", async (req, res, next) =>{
    if(!req.body.name){
        res.json(`The Database is Empty. You need to post a Project`)
    }
    try{
        res.json(await db("projects"))
    }
    catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
       return  res.status(201).json(await db("projects").insert({ 
        "name": req.body.name,
    "description": req.body.description,}
 ))
    }
    catch(err){
        next(err)
    }
})



module.exports = router