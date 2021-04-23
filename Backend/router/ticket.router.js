let express = require("express");
let router = express.Router();  //router reference. 
let TicketController = require("../controller/ticket.controller.js");

//mapping sub path with http methods. 
router.get("/resolveTicketById/:tid",TicketController.resolveTicketById)
router.post("/createTicket",TicketController.createTicket);
router.delete("/showTickets",TicketController.showTickets);

module.exports=ticket;