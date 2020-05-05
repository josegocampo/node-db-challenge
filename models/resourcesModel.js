const db = require('../data/config');


async function getAll(){
        return await db('resources')
    };

async function getById(id){
        const projects = await db.table('resources')
        .where('resource.id', id)
        return projects
    }


async function add(data){
        return await db('resources')
        .insert({
            name: data.name,
            description: data.description,
        })
    }



module.exports = {
    getAll,
    add
};