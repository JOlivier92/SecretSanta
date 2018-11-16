const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

    // room in which user is the owner (can make separate rooms 
    // if admin to separate games)
    room_ids: {
        type: Array,
        "default": []
    }
})

module.exports = User = mongoose.model('users', UserSchema);