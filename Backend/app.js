//Initialize all requirements
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");


//port number
let port = 9090;


//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



//Database URL
/**
 * update the database name when it is created here in place of meanstack
 */
let db_url = "mongodb://localhost::27017/meanstack";

//Databse Connection
const mongooseDBOption = {  //This is to avoid database connection warning
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(db_url, mongooseDBOption);

//connected to the database
let db = mongoose.connection;
/**
 * rest of the code goes here for db connection
 */



//Link to the router module
var example = require("./router/example.router.js");
app.use("/example",example);




app.listen(port, ()=>console.log(`Server running on port number: ${port}`));