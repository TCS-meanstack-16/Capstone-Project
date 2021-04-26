let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods. 
router.get("/retrieveEmployeeById/:pid",EmployeeController.getEmployeeById)
router.post("/createEmployee",EmployeeController.createEmployee);
router.patch("/changePassword",EmployeeController.changePassword)
router.delete("/deleteEmployeeById/:pid",EmployeeController.deleteEmployeeById);

module.exports=router;