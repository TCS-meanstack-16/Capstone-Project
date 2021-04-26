
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
    
    EmployeeModel.find({_id:eid},(err,data)=> {
        if(!err){
            res.json(data);
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
    let eid = req.params.eid;
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

module.exports={getEmployeeDetails,getEmployeeById,createEmployee,deleteEmployeeById}