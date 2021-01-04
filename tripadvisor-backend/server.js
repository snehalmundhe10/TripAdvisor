require('dotenv').config();
// import express
const express = require("express");
const db = require("./db");
const morgan = require("morgan");


// initalize the express app
const app = express();


app.use(express.json());



app.get("/api/v1/restaurants", async (req,res) => {
   const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json({
        status: "success",
        data: {
            restaurants: ["punjab palace", "godavari"]
        },
    })
})
// the callback function is referred to as the route handler
app.get("/api/v1/restaurants/:id", (req,res) => {
  console.log(req.params);
  res.status(200).json({
      status: "success",
      data:{
          restaurant: "mcdonalds"
      },
  })
});
//create a restaurant
app.post("/api/v1/restaurants/", (req,res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data:{
            restaurant: "mcdonalds"
        },
    })
});
//update restaurants
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