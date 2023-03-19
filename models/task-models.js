const mongoose = require('mongoose');

// We define the structure of our database using a Schema.
// Whatever is defined in the Schema will be passed to the database, everything else will be ignored
// Validations is used so no empty values can be sent to the database, for that we use require=true
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [30, 'name cannot be larger than 30 characters'],
    }, 
    completed: {
        type: Boolean,
        dafault: false,
    }
})




module.exports = mongoose.model('Task', TaskSchema);
