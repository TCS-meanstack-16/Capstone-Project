
let UserModel = require("../model/user.model.js");

//Retrieve all user details 
let getUserDetails = (req, res) => {

    UserModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
    })

}

let getUserById = (req, res) => {

    let pid = req.params.pid;       //passing id through path param 

    UserModel.find({ _id: pid }, (err, data) => {
        if (!err) {
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}

let storeUserDetails = (req, res) => {

    let user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        userId: req.body.userId,
    });

    user.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        } else {
            res.send("Record didn't store ");
        }
    })

}

let deleteUserById = (req, res) => {
    let pid = req.params.pid;
    UserModel.deleteOne({ _id: pid }, (err, result) => {
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

let updateUserFirstName = (req, res) => {
    let pid = req.body.pid;
    let updatedFirstName = req.body.firstName;
    UserModel.updateMany({ _id: pid }, { $set: { firstName: updatedFirstName } }, (err, result) => {
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

let unlockUser = (req, res) => {
    let user = getUserById(req.body.pid);
    user.userLocked = false;
}

let updateUserFundsById = (req, res) => {
    let userId = req.body.userId;
    let funds = req.body.total;
    UserModel.updateOne({ _id: userId }, {$inc:{funds: funds}}, (err, result) => {
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

module.exports = { getUserDetails, getUserById, storeUserDetails, deleteUserById, updateUserFirstName, unlockUser, updateUserFundsById }
