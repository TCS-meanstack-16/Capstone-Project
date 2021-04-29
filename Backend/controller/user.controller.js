
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
    console.log(user)
    user.save((err, result) => {
        if (!err) {
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        } else {
            res.send(err);
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
let updateUser = (req, res) => {
    let user = req.body.user
    let userId = req.body.userId
    UserModel.updateOne(
        {_id : userId},
        {$set: {
            password : user.password,
            address: user.address,
            state: user.state,
            city: user.city,
            pincode: user.pincode,
            phone: user.phone,
            emailId: user.emailId
        }}, (err, result) => {
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

/*
let unlockUser = (req, res) => {
    let user = getUserById(req.body.pid);
    user.userLocked = false;
}*/

let unlockUser= (id)=> {
    let userLocked = false;
    UserModel.updateOne({_id:id},{$set:{userLocked: userLocked}},(err,result)=> {
    })

}

let updateUserFundsById = (req, res) => {
    let userId = req.body.userId;
    let funds = req.body.total;
    let orderId = req.body.orderId;
    let reason = req.body.reason;
    UserModel.update({ _id: userId },
        {
            $inc: { funds: funds },
            $set: {
                "orders.$[outer].reason": reason
            }
        },
        {
            new: true,
            "arrayFilters": [{ "outer._id": orderId }]
        }, (err, result) => {
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

let userOrderPurchase = (req, res) => {
    let _id = req.body.order._id
    let total = req.body.order.total
    let userId = req.body.order.userId
    let date = req.body.order.date
    let products = req.body.order.products
    console.log(req.body)
    UserModel.update({ _id: userId },
        {
            $inc: { funds: -total },
            $push:
            {
                "orders": {_id: _id, total: total, products: products, user_id: userId, date: date}
            }
            , upsert: true
        },
        {
            new: true,
            "arrayFilters": [{ "outer._id": _id }]
        }, (err, result) => {
            if (!err) {
                if (result.nModified > 0) {
                    res.send("Purchased succesfully")
                } else {
                    res.send("Record is not available");
                }
            } else {
                res.send("Error generated " + err);
            }
        })
}

let login = (req, res) => {
    console.log("in login"); 
    let email = req.body.email;
    let password = req.body.password;

    UserModel.findOne({emailId:email},(err,user) => {
        try{
            if(user.password != password){
                res.send("Error: Incorrect password");
            }
        }catch(err){
            console.log("in error");
            res.send("Error: Username not found")
            return;
        }
        console.log(user._id.toString())
        res.send(user._id.toString());
    })
}

module.exports = { getUserDetails, getUserById, storeUserDetails, deleteUserById, updateUser, unlockUser, updateUserFundsById, userOrderPurchase, login }
