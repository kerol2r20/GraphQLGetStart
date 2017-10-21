import mongoose = require('mongoose');

const OrderdetailSchema = new mongoose.Schema({
    OrderdetailID: mongoose.Schema.Types.ObjectId,
    ProductID: mongoose.Schema.Types.ObjectId,
    Quantity: Number,
});

const OrderdetailModel = mongoose.model('Orderdetail', OrderdetailSchema);

export default OrderdetailModel;