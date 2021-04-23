let express = require("express");

//This is responsible to pass the flow to the controller
let router = express.Router();   //router reference

let exampleController = require("../controller/example.controller.js")

router.get("/example",exampleController.getExample)


module.exports = router;