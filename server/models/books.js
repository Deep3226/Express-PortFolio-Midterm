/******************************
 * File: books.js
 * Name: Deep Rakeshkumar Patel
 * Student ID: 301239480
 * Web app: Favourite Book List
 ******************************/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
