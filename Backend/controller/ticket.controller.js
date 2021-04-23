let TicketModel = require("../model/ticket.model.js");
let userController = require("./user.controller.js");

//Retrieve all order details 

let resolveTicketById = (req,res)=> {
    
    let tid = req.params.tid;       //passing id through path param 
    
    TicketModel.find({_id:tid},(err,ticket)=> {
        if(!err){
            let user = ticket.userID;
            userController.unlockUser(user);
            ticket.deleteTicketById(ticket._id);
        }
    })
}

let createTicket = (req,res)=> {
   
    let ticket = new TicketModel({
        _id: req.body.tid,
        name: req.body.name,
        reason: req.body.reason
    });

    ticket.save((err,result)=> {
        if(!err){
            res.send("Ticket Created Successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Error Creating Ticket ");
        }
    })

}

let deleteTicketById= (req,res)=> {
    let tid = req.params.tid;
    EmployeeModel.deleteOne({_id:tid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Ticket deleted successfully")
                }else {
                    res.send("Ticket not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let showTickets = async (req, res) => {
    try {
        const tickets = await Post.find()
            .sort({ createdAt: -1 });
        res.send(tickets);
    } catch (err) {
        res.send("Error generated "+err);
    }
};

module.exports={resolveTicketById,showTickets,createTicket,deleteTicketById}