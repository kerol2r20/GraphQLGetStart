import fs = require('fs');
import path = require('path');
import csv = require('csv');
import mongoose = require('mongoose');
import Q = require('q');

mongoose.connect('mongodb://localhost/Shop')
mongoose.Promise = global.Promise;

var CustomerSchema =  new mongoose.Schema({
    CustomerName: String,
    ContactName: String,
    Address: String,
    City: String,
    PostalCode: String,
    Country: String,
});

var CustomerModel = mongoose.model('Customer', CustomerSchema);
var raw = fs.readFileSync("./Customers.csv", "utf8");
csv.parse(raw, (err: any, data: any) => {
    data.forEach(function(element: any) {
        var customer = new CustomerModel({
            CustomerName: element[1],
            ContactName: element[2],
            Address: element[3],
            City: element[4],
            PostalCode: element[5],
            Country: element[6]
        })
        customer.save();
    });
})

var CategorySchema = new mongoose.Schema({
    CategoryName: String,
    Description: String,
})
var CategoryModel = mongoose.model('Category', CategorySchema);
raw = fs.readFileSync("./Category.csv", "utf8");
csv.parse(raw, (err, data) => {
    data.forEach(function(element: any) {
        var Category = new CategoryModel({
            CategoryName: element[1],
            Description: element[2],
        })
        Category.save();
    });
})

var EmployeeSchema = new mongoose.Schema({
    LastName: String,
    FirstName: String,
    BirthDate: String,
    Photo: String,
    Notes: String,
})
var EmployeeModel = mongoose.model('Employee', CategorySchema);
raw = fs.readFileSync("./Employees.csv", "utf8");
csv.parse(raw, (err, data) => {
    data.forEach(function(element: any) {
        var Employee = new EmployeeModel({
            LastName: element[1],
            FirstName: element[2],
            BirthDate: element[3],
            Photo: element[4],
            Notes: element[5],
        })
        Employee.save();
    });
})

var ShipperSchema = new mongoose.Schema({
    ShipperName: String,
    Phone: String,
})
var ShipperModel = mongoose.model('Shipper', ShipperSchema);
raw = fs.readFileSync("./Shipper.csv", "utf8");
csv.parse(raw, (err, data) => {
    data.forEach(function(element: any) {
        var Shipper = new ShipperModel({
            ShipperName: element[1],
            Phone: element[2],
        })
        Shipper.save();
    });
})

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
raw = fs.readFileSync("./Supplier.csv", "utf8");
csv.parse(raw, (err, data) => {
    data.forEach(function(element: any) {
        var Supplier = new SupplierModel({
            SupplierName: element[1],
            ContactName: element[2],
            Address: element[3],
            City: element[4],
            PostalCode: element[5],
            Country: element[6],
            Phone: element[7]
        })
        Supplier.save();
    });
})
