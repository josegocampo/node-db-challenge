const db = require('../data/config');

async function getRp(resId){

    const pr = await db('resources')
    .join('project_resources as pr', 'pr.resource_id', 'resources.res_id')
    .join('projects as p', 'pr.project_id', 'p.id')
    .where('resources.res_id', resId)
    .select('p.name', 'p.id')

    return pr
};

module.exports = {
    getRp
};