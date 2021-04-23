let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let exampleSchema = mongoose.Schema({
    _id: Number,
    /**
     * enter the schema details here as needed
     */
});

let exampleModel = mongoose.model("",exampleSchema,"Example");

module.exports = exampleModel;