const express = require('express')
router = express.Router()

const db = require('../models/projectsModel')

router.get("/", async (req, res, next) =>{
    if(!req.body.name){
        res.json(`The Database is Empty. You need to post a Project`)
    }
    try{
        res.json(await db.getAll())
     } catch(err){
         next(err)
     }
})

router.get('/:id', async (req, res, next)=>{
    try{
        res.json(await db.getById(req.params.id))
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.json(await db.insert(req.body))
    } catch(err) {
        next(err)
    }
})



module.exports = router