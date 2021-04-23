let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let EmployeeSchema = mongoose.Schema({
    _id: Number,
    name: String,
    email: String,
    password: String,
    isAdmin: {type: Boolean, default:false}
})

let employeeModel = mongoose.model("Employee", EmployeeSchema, "employees");

module.exports = EmployeeModel
