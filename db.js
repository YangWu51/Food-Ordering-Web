const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://wuy:Shanxiawoyan0809!@cluster0.yw2fy.mongodb.net/FoodOrderingWeb'

mongoose.connect(mongoURL, 
    // {useUnifiedTopology:true, useNewUrlParser:true}
)
var db = mongoose.connection
db.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})
db.on('error' , () =>{
    console.log(`Mongo DB Connection failed`);
})
module.exports = mongoose