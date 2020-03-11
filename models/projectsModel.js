const db = require('../data/config');


async function getAll(){
        return await db.table('projects')
    };

async function getById(id){
        const projects = await db.table("projects")
        .where('projects.id', id)
        return projects
    }

async function insert(data){
        return await db('projects')
        .insert({
            name: data.name,
            description: data.description,
        })
    }


    module.exports = {
        getAll,
        getById,
        insert
    };