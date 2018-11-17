const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    // admin email address
    email: {
        type: String,
        required: true
    },

    // not their real password (hashed beforehand)
    password: {
        type: String,
        required: true
    },

    // room in which Admin is the owner (can make separate rooms
    // if admin to separate games)
    room_ids: {
        type: Array,
        "default": []
    }
});

module.exports = Admin = mongoose.model('admins', AdminSchema);