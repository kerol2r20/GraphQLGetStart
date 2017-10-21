import mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductName: String,
    SupplierID: mongoose.Schema.Types.ObjectId,
    CategoryID: mongoose.Schema.Types.ObjectId,
    Unit: String,
    Price: Number,
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;