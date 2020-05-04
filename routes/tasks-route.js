const express = require('express')
const router = express.Router({mergeParams: true});

const db = require('../models/tasksModel')


router.get('/tasks', async (req, res, next)=>{
    try {
        res.json(await db.getTasks(req.params.id))
        
    } catch(err){
        next(err)
    }
})

router.post('/tasks', async (req, res, next)=>{
    res.json(await db.add(req.params.id, req.body))
})

module.exports = router;