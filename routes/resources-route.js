const express = require('express')
const router = express.Router();

const db = require('../models/resourcesModel')


router.get('/', async (req, res, next)=>{
    try {
        res.json(await db.getAll())
    } catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const projectId = req.body.project_id
    const newRes = {
       name: req.body.name,
       description: req.body.description,
     }
    try {
        await db.insert(newRes, projectId)
        res.sendStatus(201)
    } catch(err) {
        next(err)
    }
})


module.exports = router;