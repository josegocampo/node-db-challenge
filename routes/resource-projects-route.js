const express = require('express')
const router = express.Router({mergeParams: true});

const db = require('../models/rpModel')

router.get('/', async (req, res, next)=>{

    console.log(req.params)
    try {
       res.json(await db.getRp(req.params.id))
  

    } catch(err){
        next(err)
    }
})


module.exports = router;