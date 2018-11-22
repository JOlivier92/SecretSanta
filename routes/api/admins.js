const Admin = require('../../models/Admin');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');


let errors = {};

exports.current = function(req, res) {
    res.json({
        id: req.user.id,
        email: req.user.email,
        room_ids: req.user.room_ids,
    });
};

exports.register = function(req,res){
    debugger;
    Admin.findOne({email: req.body.email}).then(admin => {
        // if the admin already exists in the database, return 400 level error
        if (admin) {
            errors.name = 'admin already exists';
            return res.status(400).json(errors)
        } else {
        // else, assign newAdmin to posted body data
            const newAdmin = new Admin({
                email: req.body.email,
                room_ids: req.body.room_ids,
                password: req.body.password
            });
            debugger;
            // generate salt with 10 iterations, pass errors / generated salt to CB
            bcrypt.genSalt(10, (err, salt) => {
                debugger;
                // attach salt to given password, pass errors / new hash to CB
                bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                    debugger;
                    if(err) throw err;
                    // if no errors, save the admin to the database with generated hash
                    newAdmin.password = hash;
                    // if admin successfully saves, sign jsonwebtoken
                    newAdmin.save()
                    .then(admin => {
                        const payload = {
                            id: admin.id,
                            email: admin.email,
                            room_ids: admin.room_ids,
                        };
                        jsonwebtoken.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        })
                    })
                })
            })
        }
    });
}

exports.login = function(req,res) {

    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({email})
    .then(admin => {
        if(!admin) {
            errors.email = "This admin doesn't exist";
            return res.status(400).json(errors);
        }
        bcrypt.compare(password, admin.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: admin.id,
                    email: admin.email,
                    room_ids: admin.room_ids
                };
                jsonwebtoken.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                })
            } else {
                errors.password = "incorrect password"
                return status(400).json(errors)
            }
        })
    })
}

exports.getRooms = function(req,res) {
    debugger;
    Admin.findOne({_id: req.baseUrl.slice(12)})
        .then(admin => {
            debugger;
        })
    Room.find({adminId: req.baseUrl.slice(12)})
        .then(rooms => {
            debugger;
        })
}