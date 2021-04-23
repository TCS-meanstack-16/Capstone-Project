
let exampleModel = require("../model/example.model.js")

let getExample = (req,res) => {
    exampleModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}


module.exports(getExample);