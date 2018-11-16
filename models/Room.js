const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    // minimum to maximum value of gift
    minMax: {
        type: String,
        required: false
    },

    // list of everyone inside of the room
    userList: {
        type: Array,
        "default": []
    }
});


module.exports = Room = mongoose.model('rooms',RoomSchema);