
const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('connected', () => console.log(`MongoDB Connected`));
db.on('error', () => console.log(`MongoDB Connection Failed`));

module.exports = mongoose;



// const mongoose = require("mongoose");

// const mongoURL = process.env.MONGO_URL;

// mongoose.connect(mongoURL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

// const db = mongoose.connection;
// db.on('connected', () => {
//     console.log("Mongo DB Connection Successful");
// });
// db.on('error', () => {
//     console.log("Mongo DB Connection Failed");
// });

// module.exports = mongoose;
