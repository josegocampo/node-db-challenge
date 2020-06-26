const express = require('express')
router = express.Router()

const db = require('../models/projectsModel')

router.get("/", async (req, res, next) =>{
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
        res.json(await db.add(req.body))
    } catch(err) {
        next(err)
    }
})

router.post('/:id/resources/:idB', async (req, res, next) => {
    //const projectId = req.body.project_id
    const projectId = req.params.id
    const resoName = req.params.idB
    const resoInfo = req.body
    console.log(req.params.name)
     
    try {
        res.json(await db.addRes(projectId, resoName, resoInfo))
        
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        res.json(await db.remove(req.params.id))
    } catch(err){
        next(err)
    }
})



module.exports = router