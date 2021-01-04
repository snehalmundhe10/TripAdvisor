require('dotenv').config();
// import express
const express = require("express");
const db = require("./db");
const morgan = require("morgan");


// initalize the express app
const app = express();


app.use(express.json());


// Get all restaurants
app.get("/api/v1/restaurants", async (req,res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            },
        });
    }   
    catch(err){
            console.log(err);
    } 
});

// Get a restaurant with id
app.get("/api/v1/restaurants/:id", async (req,res) => {
    try {
        const results = 
                await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);  
        res.status(200).json({
            status: "success",
            data: {
                restaurant : results.rows[0]
            }
        });     
    }
    catch(err){
        console.log(err);
    }
});

//Create a restaurant
app.post("/api/v1/restaurants/", async (req,res) => {
    try {
        const results = 
           await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *"
           , [req.body.name, req.body.location, req.body.price_range]);
        console.log(results.body);
        res.status(201).json({
            status: "success",
            data:{
                restaurant: results.rows[0]
            }
        });
    } 
    catch(err){
        console.log(err);
    }
    
});

//Update restaurants
app.put("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data:{
            restaurant: "mcdonalds"
        },
    })
});
//delete restaurant
app.delete("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params.id);
    res.status(204).json({
        status: "success",
        data: {

        },
    })
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});