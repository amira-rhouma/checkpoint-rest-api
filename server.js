const express= require ("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");



const app = express();

// connect DB
dbConnect();

// create route
//d middleware routing body parse
app.use(express.json());

app.use("/api/contact", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(5000,(err)=>
err ? console.error(err) : console.log("server is running")
);