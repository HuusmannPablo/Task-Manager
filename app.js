const express = require('express');
const app = express();
const tasks = require('./routes/tasks-routes');
const connectDB = require('./db/db-connection');
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config();

//  MIDDLEWARE
app.use(express.static('./public'))
app.use(express.json())


// ROUTES
// I define 'tasks' as my route, and then put every route in the tasks.js routes file
// This way, I only use .use and define the operations in a different file
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()