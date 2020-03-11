const express = require('express');
const server = express()

const projectsRoute = require('./routes/projectsRoute');
const resourcesRoute = require('./routes/resourcesRoute')
const tasksRoute = require('./routes/tasksRoute')

server.use(express.json())

server.use('/projects', projectsRoute)
server.use('/resources', resourcesRoute)
server.use('/projects/:id', tasksRoute)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
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