const db = require('../data/config');


async function getRp(id){
        const pr = await db('project_resources')
        .join('projects', 'projects.id' ,'resources.project_id')
        .where('projects.id', id)
        .select('project_resources.*', 'projects.name as project_name')

        return pr
    };




    module.exports = {
        getRp
    };