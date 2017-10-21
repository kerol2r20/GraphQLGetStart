import mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    CustomerID: mongoose.Schema.Types.ObjectId,
    EmployeeID: mongoose.Schema.Types.ObjectId,
    OrderDate: String,
    ShipperID: mongoose.Schema.Types.ObjectId,
});

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;