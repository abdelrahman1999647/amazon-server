const express = require('express');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');


const authRouter =require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/users');

const PORT = 3000;

const app = express();
const DB = "mongodb+srv://abdelrahman:abdo1999@cluster0.xkftvkc.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);



mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log(e);
});



app.listen(PORT, "0.0.0.0", () => {
    console.log("connected at port " + PORT);
});

