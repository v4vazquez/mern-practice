import express from 'express'; //this is the more modern way of doing this, const express = require('express');  this is the traditional way of doing it
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from './models/product.model.js';  //import of the model created
import mongoose from 'mongoose';

import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();  //this is to call the function, so whenever you see "app.use" or app.get etc, its calling the function 
const PORT = process.env.PORT || 5000;

app.use(express.json()); //this allows the usage of JSON data in req.body on line 12, its a middleware that allows the parsing of a request

app.use("/api/products",productRoutes) //when this is called, it calls this path from product.route. If you use post or get it will pull the corresponding method based on the HTTP method


console.log(process.env.MONGO_URI)
//this listens for a port, callback function 
app.listen(PORT, () =>{
    connectDB();
    console.log("server started at http://localhost:" + PORT)
})