const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    // admin who owns the current room
    adminId: {
        type: String,
        required: true
    },

    // minimum value of gift
    priceRange: {
        type: String,
        required: false
    },

    // list of everyone inside of the room
    participants: {
        type: Array,
        "default": []
    }
});


module.exports = Room = mongoose.model('rooms',RoomSchema);