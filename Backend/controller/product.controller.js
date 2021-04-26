
let ProductModel = require("../model/product.model.js");

//Retrieve all product details 
let getProductDetails = (req, res) => {

    ProductModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })

}

let getProductById = (req, res) => {

    let pid = req.params.pid;       //passing id through path param 

    ProductModel.find({ _id: pid }, (err, data) => {
        if (!err) {
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}

let storeProductDetails = (req, res) => {

    let product = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    });

    product.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        } else {
            res.send(err);
        }
    })

}

let deleteProductById = (req, res) => {
    let pid = req.params.pid;
    ProductModel.deleteOne({ _id: pid }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Record deleted successfully")
            } else {
                res.send("Record not present");
            }
        } else {
            res.send("Error generated " + err);
        }
    })

}

//Have previous values as default in form
let updateProduct = (req, res) => { 
    let pid = req.body.pid;
    ProductModel.updateMany(
        { _id: pid }, 
        { $set: 
            {   name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity
            }
        }, 
    (err, result) => {
        if (!err) {
            if (result.nModified > 0) {
                res.send("Record updated succesfully")
            } else {
                res.send("Record is not available");
            }
        } else {
            res.send("Error generated " + err);
        }
    })

}

module.exports = { getProductDetails, getProductById, storeProductDetails, deleteProductById, updateProduct }