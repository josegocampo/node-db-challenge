const express = require('express')
const server = express()

const projectsRoute = require('./routes/projects-route')
const resourcesRoute = require('./routes/resources-route')
const tasksRoute = require('./routes/tasks-route')
const rpRoute = require ('./routes/resource-projects-route')

server.use(express.json())

server.use('/projects', projectsRoute)
server.use('/resources', resourcesRoute)
server.use('/projects/:id', tasksRoute)
server.use('/projects/:id/resources', rpRoute)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
        message: "Something went terribly wrong!",
	})
})


server.get('/', (req, res)=>{
    res.json({
        message: 'Welcome!'
    })
})



const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})