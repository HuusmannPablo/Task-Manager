const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//  MIDDLEWARE
app.use(express.static('./public'))
app.use(express.json())


// routes

// I define 'tasks' as my routes, and then put every route in the tasks.js routes file
// This way, I only use .use and define the operations in a different file
app.use('/api/v1/tasks', tasks)

    // get all the tasks
app.get('/api/v1/tasks')
    // create new task
app.post('/api/v1/tasks')  
    // get single task
app.get('/api/v1/tasks/:id')  
    // update task
app.patch('/api/v1/tasks/:id')  
    // delete task
app.delete('/api/v1/tasks/:id')  



const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()