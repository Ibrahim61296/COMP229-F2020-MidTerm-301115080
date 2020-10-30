/* File name: books.js
   Name: Ibrahim Yusuf Patel
   Student ID: 301115080
   Date: 30/10/2020
*/

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('book', bookModel);
