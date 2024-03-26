require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT ||5000;
const MONGODB_URI =process.env.MONGODB_URI;
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const blogsRoutes = require("./routes/blogsRoutes");

mongoose.connect(MONGODB_URI)
.then(()=> console.log("connected to mongoDB"))
.catch((error) => console.error("could not connect to mongoDB", error));

app.use(cors());

app.use(express.json());

app.use("/api/users",userRoutes);

app.use("/api/blogs", blogsRoutes);

app.get("/",(req,res) => {
    res.send("Backend server is running")
});

app.listen(PORT, ()=> {
    console.log(`server is listening to ${PORT}`);
})


//add