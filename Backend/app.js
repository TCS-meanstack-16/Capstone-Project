//Load all required modules 
let express = require("express");
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

app.use(express.static(process.cwd()));
//Database URL Details 
//Replace <username> and <password> with your username and password
//"mongodb+srv://<username>:<password>@cluster0.7tart.mongodb.net/grocer?retryWrites=true&w=majority"

let url = "mongodb+srv://miguel:zeus1007@cluster0.7tart.mongodb.net/grocer?retryWrites=true&w=majority";


//middleware enable data from post method.
app.use(bodyParser.urlencoded({ extended: true }));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());           // enable cors policy 

//Database connection without warning 
const mongooseDbOption = {       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module like a import concept. 
var Product = require("./router/product.router.js");
var Order = require("./router/order.router.js");
var User = require("./router/user.router.js");

var Employee = require("./router/employee.router.js");
var Ticket = require("./router/ticket.router.js");
var Request = require("./router/request.router.js");


//URL 


//Middleware 

// http://3.80.137.241:9080/product/allProductDetails   Get App Product Details 
// http://3.80.137.241:9080/product/retrieveProductById/102   Get App Product Details by Id  
// http://3.80.137.241:9080/product/storeProductDetails    rest client or post man {"pid":103,"name":"Computer","price":43000}
// http://3.80.137.241:9080/product/deleteProductById/101
// http://3.80.137.241:9080/product/updateProductPrice  update price using pid {"pid":103,"price":48000}

app.use("/product", Product)
app.use("/order", Order)
app.use("/user", User)
app.use("/employee", Employee)
app.use("/ticket", Ticket)
app.use("/request", Request)



app.listen(9080, () => console.log("Server running on port number 9090"));

