let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    quantity: Number
})

let ProductModel = mongoose.model("Product", ProductSchema, "products");

module.exports = ProductModel