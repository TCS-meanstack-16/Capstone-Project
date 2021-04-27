let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods. 
router.get("/retrieveEmployeeById/:eid",EmployeeController.getEmployeeById)
router.post("/createEmployee",EmployeeController.createEmployee);
router.put("/changePassword",EmployeeController.changePassword)
router.delete("/deleteEmployeeById/:eid",EmployeeController.deleteEmployeeById);

module.exports=router;