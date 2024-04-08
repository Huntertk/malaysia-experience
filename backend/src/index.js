const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const adminRouter = require('./routes/adminRoute');
const bookingRouter = require('./routes/bookingRoute')
const bookTypeOneDateRouter = require('./routes/bookTypeOneDateRoutes')
dotenv.config();

//Initializing Express App
const app = express();
const PORT = process.env.PORT || 4000


//Middlewares
app.use(express.json());
app.use(cookieParser())

//Routes
app.use("/api/v1/booking", bookingRouter)
app.use("/api/v1/admin", adminRouter)
// app.use("/api/v1/bookingplan", bookingPlanRouter)
app.use("/api/v1/booktype-one-dates-manage", bookTypeOneDateRouter)


//Serving Frontend Statically
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")))


//Sending Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "index.html"))
})

//Server Start

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log("Server is Runnning on PORT : ", PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

dbConn()