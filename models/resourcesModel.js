const db = require('../data/config');


async function getAll(){
        return await db.table('resources')
    };

async function insert(newRes, projectId){
  const [resourceId] = await db('resources')
    .insert(newRes)
  
  await db('project_resources')  
  .insert({
      project_id: projectId,
      resource_id: resourceId
  })
}


module.exports = {
    getAll,
    insert
};