import Q = require('q');
import csv = require('csv');
import fs = require('fs');
import path = require('path');
import mongoose = require('mongoose');

import CustomerModel from './Models/CustomerModel';
import CategoryModel from './Models/CategoryModel';
import EmployeeModel from './Models/EmployeeModel';
import ShipperModel from './Models/ShipperModel';
import SupplierModel from './Models/SupplierModel';

mongoose.connect('mongodb://localhost/Shop', {useMongoClient: true});
mongoose.Promise = global.Promise;

const CsvParse = Q.denodeify(csv.parse);

async function BulkLoading() {
    const Customers: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Customers.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Customers.forEach((element: any) => {
        const model = new CustomerModel({
            CustomerName: element[1],
            ContactName: element[2],
            Address: element[3],
            City: element[4],
            PostalCode: element[5],
            Country: element[6],
        })
        model.save();
    });

    const Categories: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Category.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Categories.forEach((element: any) => {
        const model = new CategoryModel({
            CategoryName: element[1],
            Description: element[2],
        })
        model.save();
    });

    const Employees: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Employees.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Employees.forEach((element: any) => {
        const model = new EmployeeModel({
            LastName: element[1],
            FirstName: element[2],
            BirthDate: element[3],
            Photo: element[4],
            Notes: element[5],
        })
        model.save();
    });
    
    const Shipper: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Shipper.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Shipper.forEach((element: any) => {
        const model = new ShipperModel({
            ShipperName: element[1],
            Phone: element[2],
        })
        model.save();
    });

    const Supplier: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Supplier.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Supplier.forEach((element: any) => {
        const model = new SupplierModel({
            SupplierName: element[1],
            ContactName: element[2],
            Address: element[3],
            City: element[4],
            PostalCode: element[5],
            Country: element[6],
            Phone: element[7],
        })
        model.save();
    });
}

BulkLoading();