const express = require("express");
const Pizza = require('./models/pizzaModel')

const app = express();
const db = require("./db.js")
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')

app.use('/api/pizzas/', pizzasRoute)
app.get("/", (req, res) => {
    res.send("Server working " + port);
});
// app.get("/getpizzas", async (req, res) => {
//     try{
//         const pizzas = await Pizza.find({});
//         res.send(pizzas);
//     }catch(err){
//         console.error(err);
//         res.status(500).send(err.message);
//     }
// })
const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port`);