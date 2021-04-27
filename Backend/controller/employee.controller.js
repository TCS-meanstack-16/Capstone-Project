
let EmployeeModel = require("../model/employee.model.js");

//Retrieve all order details 
let getEmployeeDetails =(req,res)=> {

    EmployeeModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })

}

let getEmployeeById = (req,res)=> {
    let eid = req.params.eid;       //passing id through path param 

    EmployeeModel.find({_id:eid},(err,employee)=> {
        if(!err){
            res.json(employee);
        }
    })
}

let createEmployee = (req,res)=> {
   
    let employee = new EmployeeModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    });

    employee.save((err,result)=> {
        if(!err){
            res.send("Employee Created Successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Error Creating Employee ");
        }
    })

}

let deleteEmployeeById= (req,res)=> {
    console.log("In delete employee");
    let eid = req.params.eid;
    console.log(eid);
    EmployeeModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Employee deleted successfully")
                }else {
                    res.send("Employee not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let changePassword = (req,res) => {
    let eid = req.body._id;

    EmployeeModel.updateOne(
        { _id: eid }, 
        { $set: 
            {  
                password: req.body.password
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

module.exports={getEmployeeDetails,getEmployeeById,createEmployee,deleteEmployeeById,changePassword}