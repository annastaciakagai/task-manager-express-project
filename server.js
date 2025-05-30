const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes')

//Create express server and middleware
const app =express();
app.use(express.json());

const mongoUri = 'mongodb://localhost:27017/taskdb';
const PORT = 3000;

//Mongodb connection
mongoose.connect(mongoUri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


//use task routes
app.use('/', taskRoutes);


//Fire up the server

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
})