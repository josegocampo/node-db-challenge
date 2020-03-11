const db = require('../data/config');


async function getAll(){
        return await db.table('resources')
    };

   async function insert(data){
        return await db('resources')
        .insert({
            name: data.name,
            description: data.description,
        })
    }



module.exports = {
    getAll,
    insert
};