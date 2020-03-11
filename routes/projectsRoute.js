const express = require('express')
router = express.Router()

const db = require('../data/config');

router.get("/", async (req, res, next) =>{
    try{
        res.json(await db("projects"))
    }
    catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const { id } = req.params.id;
        res.json({
            "id": id,
            "name": "",
            "description": "",
            "completed": ""
        })
    }
    catch(err){
        next(err)
    }
})



module.exports = router