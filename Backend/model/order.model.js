let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 


let OrderSchema = mongoose.Schema({
    _id: Number,
    total: Number,
    userId: Number,
    products: Array,
    status: {type: String, default: "pending"},
    date: {type: Date, default: Date.now}

})



let OrderModel = mongoose.model("Order", OrderSchema, "orders");

module.exports = OrderModel