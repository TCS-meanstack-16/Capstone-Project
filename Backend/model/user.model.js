let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const AutoIncrement = require('mongoose-sequence')(mongoose);

let UserSchema = mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    dob: Date,
    phone: String,
    address: String,
    funds: Number,
    orders: [],
    userLocked: { type: Boolean, default: false }, //setting default value to check if account is locked
    userId: String //attempting to auto generate userId
}, { _id: false })

UserSchema.plugin(AutoIncrement, {id: 'user', inc_field: '_id'});

let UserModel = mongoose.model("User", UserSchema, "users");

module.exports = UserModel