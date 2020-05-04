const db = require('../data/config');


async function getTasks(id){
        const tasks = await db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .where('projects.id', id)
        .select('tasks.*', 'projects.name as project_name')

        return tasks
    };

async function add(id, data){
        return await db('tasks')
            .insert({
                description: data.description,
                notes: data.notes,
                project_id: id
            })  
    }



    module.exports = {
        getTasks,
        add
    };