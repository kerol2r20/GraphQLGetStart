import mongoose = require('mongoose');

const CustomerSchema =  new mongoose.Schema({
    CustomerName: String,
    ContactName: String,
    Address: String,
    City: String,
    PostalCode: String,
    Country: String,
});

export const CustomerModel = mongoose.model('Customer', CustomerSchema);
