import mongoose = require('mongoose');

var SupplierSchema = new mongoose.Schema({
    SupplierName: String,
    ContactName: String,
    Address: String,
    City: String,
    PostalCode: String,
    Country: String,
    Phone: String
})

var SupplierModel = mongoose.model('Supplier', SupplierSchema);

export default SupplierModel;