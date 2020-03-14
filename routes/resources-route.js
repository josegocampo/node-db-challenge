const express = require('express')
const router = express.Router({mergeParams: true});

const db = require('../data/config')


router.get('/resources', async (req, res, next)=>{
    try {
        const resources = await db("project_resources as pr")
        .join("projects as p", "p.id", "pr.project_id")
        .join("resources as r", "r.id", "pr.resource_id")
        .where("p.id", req.params.id)
        .select("p.id")
        res.json(resources)
    } catch(err){
        next(err)
    }
})

router.post('/resources', async (req, res, next) =>{
    const payload = {
            name: req.body.name,
            description: req.body.description,
            project_id: req.body.project_id
    }
    try{
        const postr = await db('resources')
        .insert(payload)
        res.json(postr)
    
    }
    catch(err){
        next(err)
    }
})


module.exports = router;