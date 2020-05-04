const db = require('../data/config');


async function getTasks(id){
        const tasks = await db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .where('projects.id', id)
        .select('tasks.*', 'projects.name as project_name')

        return tasks
    };

async function add(id, info){
        return await db('tasks')
            .insert({
                description: info.description,
                notes: info.notes,
                project_id: id
            })  
    }



    module.exports = {
        getTasks,
        add
    };