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
    try {
        res.json(await db.insert(req.body))
    } catch(err) {
        next(err)
    }
})


module.exports = router;