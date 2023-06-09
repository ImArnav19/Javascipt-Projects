const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({

    user_id :{
        type:mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "User",
    },
    name:{
        type:String,
        required :[true,"Please add the Contact name"],

    },
    email:{
        type:String,
        required :[true,"Please add the Email Address"],

    },
    phone:{
        type:String,
        required :[true,"Please add the Contact phoene"],

    },

},
{
    timestamps:true,
}
);

module.exports = mongoose.model("Contact",contactSchema);
