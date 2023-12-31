const express = require('express');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const router = require('./routes/index.js')

const app = express();

app.use(morgan("dev"));

app.use(cookieParser());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "https://marys-portfolio.vercel.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.use("/",router);//cambiar 

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
})
module.exports = app;