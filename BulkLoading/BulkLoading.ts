import Q = require('q');
import csv = require('csv');
import fs = require('fs');
import path = require('path');
import mongoose = require('mongoose');
import _ = require('lodash');

import CustomerModel from './Models/CustomerModel';
import CategoryModel from './Models/CategoryModel';
import EmployeeModel from './Models/EmployeeModel';
import ShipperModel from './Models/ShipperModel';
import SupplierModel from './Models/SupplierModel';
import ProductModel from './Models/ProductModel';
import OrderModel from './Models/OrderModel';
import OrderdetailModel from './Models/OrderdetailModel';

mongoose.connect('mongodb://localhost/Shop', {useMongoClient: true});
mongoose.Promise = global.Promise;

const CsvParse = Q.denodeify(csv.parse);

async function BulkLoading() {
    const Customers: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Customers.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Customers.map((element: any) => {
        const model = new CustomerModel({
            CustomerName: element[1],
            ContactName: element[2],
            Address: element[3],
            City: element[4],
            PostalCode: element[5],
            Country: element[6],
        });
        element[0] = model._id;
        model.save();
    });

    const Categories: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Category.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Categories.map((element: any) => {
        const model = new CategoryModel({
            CategoryName: element[1],
            Description: element[2],
        });
        element[0] = model._id;
        model.save();
    });

    const Employees: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Employees.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Employees.map((element: any) => {
        const model = new EmployeeModel({
            LastName: element[1],
            FirstName: element[2],
            BirthDate: element[3],
            Photo: element[4],
            Notes: element[5],
        });
        element[0] = model._id;
        model.save();
    });
    
    const Shipper: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Shipper.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Shipper.map((element: any) => {
        const model = new ShipperModel({
            ShipperName: element[1],
            Phone: element[2],
        });
        element[0] = model._id;
        model.save();
    });

    const Supplier: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Supplier.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Supplier.map((element: any) => {
        const model = new SupplierModel({
            SupplierName: element[1],
            ContactName: element[2],
            Address: element[3],
            City: element[4],
            PostalCode: element[5],
            Country: element[6],
            Phone: element[7],
        });
        element[0] = model._id;
        model.save();
    });

    const Product: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Product.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Product.map((element: any) => {
        const model = new ProductModel({
            ProductName: element[1],
            SupplierID: Supplier[element[2]-1][0],
            CategoryID: Categories[element[3]-1][0],
            Unit: element[4],
            Price: element[5],
        });
        element[0] = model._id;
        model.save();
    });

    const Order: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Order.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Order.map((element: any) => {
        const model = new OrderModel({
            CustomerID: Customers[element[1]-1][0],
            EmployeeID: Employees[element[2]-1][0],
            OrderDate: element[3],
            ShipperID: Shipper[element[4]-1][0],
        });
        element[0] = model._id;
        model.save();
    });

    const Orderdetail: any = await Q.nfcall(fs.readFile, path.join(__dirname, 'csv', 'Orderdetail.csv'), 'utf8').then(rawdata => CsvParse(rawdata));
    Orderdetail.map((element: any) => {
        const model = new OrderdetailModel({
            OrderdetailID: Order[element[1]-10248][0],
            ProductID: Product[element[2]-1][0],
            Quantity: element[3],
        });
        element[0] = model._id;
        model.save();
    });
}

BulkLoading();