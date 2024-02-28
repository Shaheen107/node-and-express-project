const express = require("express")
const app =  express();
const dotenv = require("dotenv").config();
const contactRouter = require("./routes/contactRoutes.js");
const userRouter = require("./routes/userRoutes.js")
const errorHandler = require("./middlewares/errorHandler.js");
const connectDb = require("./config/dbConnection.js");

const port =process.env.PORT || 5000

connectDb();

app.use(express.json())
app.use("/api/contacts", contactRouter)
app.use("/api/users", userRouter)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})