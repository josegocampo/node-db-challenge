const express = require('express')
const router = express.Router();

const db = require('../models/rpModel')

router.get('/resources', async (req, res, next)=>{
    try {
       res.json(await db.getRp(req.params.id))
  

    } catch(err){
        next(err)
    }
})


module.exports = router;