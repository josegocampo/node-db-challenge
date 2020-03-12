// const db = require('../data/config');


// async function getResourceProjects(id){
//         const tasks = await db('project_resources')
//         .join('projects', 'projects.id' ,'resource.project_id')
//         .where('projects.id', id)
//         .select('tasks.*', 'projects.name as project_name')

//         return tasks
//     };

// async function insert(id, data){
//         return await db('tasks')
//             .insert({
//                 description: data.description,
//                 notes: data.notes,
//                 project_id: id
//             })  
//     }



//     module.exports = {
//         getTasks,
//         insert
//     };