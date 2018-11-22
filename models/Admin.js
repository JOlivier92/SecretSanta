const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    // admin email address
    email: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    // not their real password (hashed beforehand)
    password: {
        type: String,
        required: true
    }
});

module.exports = Admin = mongoose.model('admins', AdminSchema);