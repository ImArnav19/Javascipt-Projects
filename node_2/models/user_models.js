const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : {
        type: String,
        required :[true,"Please enter a Username"],
    },
    email : {
        type: String,
        required :[true,"Please enter a valid email"],
        unique :[true,"Email already taken!"],
    },
    password : {
        type: String,
        required :[true,"Please enter pass"],
    },
    
},{
    timestamps :true,
});

module.exports = mongoose.model("Users",UserSchema);
