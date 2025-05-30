const mongoose = require('mongoose');

//define table
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: String,
    completed: {type: Boolean, default:false}
})

//export
module.exports = mongoose.model('task', taskSchema);