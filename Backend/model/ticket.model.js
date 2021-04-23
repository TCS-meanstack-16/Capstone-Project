let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let TicketSchema = mongoose.Schema({
    _id: Number,
    userID: Number,
    name: String,
    reason: String
})

let TicketModel = mongoose.model("Ticket", TicketSchema, "Tickets");

module.exports = TicketModel