const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const adminRouter = require('./routes/adminRoute');
const bookingRouter = require('./routes/bookingRoute');

const splashManiaBookTypeOneDateRouter = require('./routes/splashMania/bookTypeOneDateRoutes');

const arasResturantBookTypeOneDateRouter = require('./routes/arasResturant/bookTypeOneDateRoutes');
const arasResturantBookTypeTwoDateRouter = require('./routes/arasResturant/bookTypeTwoDateRoutes');

const sunwayLagoonBookTypeOneDateRouter = require('./routes/sunwayLagoon/bookTypeOneDateRoutes');
const sunwayLagoonBookTypeTwoDateRouter = require('./routes/sunwayLagoon/bookTypeTwoDateRoutes');
const sunwayLagoonBookTypeThreeDateRouter = require('./routes/sunwayLagoon/bookTypeThreeDateRoutes');
const sunwayLagoonBookTypeFourDateRouter = require('./routes/sunwayLagoon/bookTypeFourDateRoutes');

const bookTypeOneDateRouter = require('./routes/bookTypeOneDateRoutes');
const errorHandlerMiddleware = require('./middlewares/errorHandleMiddleware');
dotenv.config();

//Initializing Express App
const app = express();
const PORT = process.env.PORT || 4000


//Middlewares
app.use(express.json());
app.use(cookieParser())

//Routes
app.use("/api/v1/booking", bookingRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/booktype-one-dates-manage", bookTypeOneDateRouter);


//Splash Mania
app.use("/api/v1/splash-mania-booktype-one-dates-manage", splashManiaBookTypeOneDateRouter);

//Aras Resturant
app.use("/api/v1/aras-resturant-booktype-one-dates-manage", arasResturantBookTypeOneDateRouter);
app.use("/api/v1/aras-resturant-booktype-two-dates-manage", arasResturantBookTypeTwoDateRouter);

//Sunway Lagoon
app.use("/api/v1/sunway-lagoon-booktype-one-dates-manage", sunwayLagoonBookTypeOneDateRouter);
app.use("/api/v1/sunway-lagoon-booktype-two-dates-manage", sunwayLagoonBookTypeTwoDateRouter);
app.use("/api/v1/sunway-lagoon-booktype-three-dates-manage", sunwayLagoonBookTypeThreeDateRouter);
app.use("/api/v1/sunway-lagoon-booktype-four-dates-manage", sunwayLagoonBookTypeFourDateRouter);
// app.use("/api/v1/bookingplan", bookingPlanRouter)


//Serving Frontend Statically
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")))


//Sending Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "index.html"))
})

//Global Err Handler
app.use(errorHandlerMiddleware)

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