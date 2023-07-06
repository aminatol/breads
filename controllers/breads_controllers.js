const express = require("express");
const breads = express.Router();
const Bread = require('../models/bread.js'); // pulls from array in breads.js

//INDEX
//breads variable to add in new routes from server
breads.get("/", (req, res) => {
  res.send("This is the index at /breads");
});
//Show
breads.get('/:arrayIndex', (req,res)=>{
    res.send(Bread[req.params.arrayIndex])
})
module.exports = breads; //exports data from file
