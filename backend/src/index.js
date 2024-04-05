const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

//Initializing Express App
const app = express();
const PORT = process.env.PORT || 4000


//Middlewares
app.use(express.json());

//Serving Frontend Statically
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")))


//Sending Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "index.html"))
})

//Server Start
app.listen(PORT, () => {
    console.log("Server is Running On PORT ", PORT);
})