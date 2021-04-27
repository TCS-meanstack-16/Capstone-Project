
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
let updateUser = (req, res) => {
    let user = req.body.user
    UserModel.replaceOne(
        {_id : user._id},
        user,
        {
          upsert: true                  
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

let unlockUser= (req,res)=> {
    let userId = req.body.userId;
    let userLocked = !req.body.userLocked;
    console.log(userLocked)
    UserModel.updateMany({_id:userId},{$set:{userLocked: userLocked}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Record updated succesfully")
            }else {
                    res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
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
    let order = req.body.order;
    
    UserModel.update({ _id: order.userId },
        {
            $inc: { funds: -order.total },
            $push:
            {
                "orders": order
            }
            , upsert: true
        },
        {
            new: true,
            "arrayFilters": [{ "outer._id": order._id }]
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

module.exports = { getUserDetails, getUserById, storeUserDetails, deleteUserById, updateUser, unlockUser, updateUserFundsById, userOrderPurchase }
