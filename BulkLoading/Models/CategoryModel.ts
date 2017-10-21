import mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    CategoryName: String,
    Description: String,
});

const CategoryModel = mongoose.model('Category', CategorySchema);

export default CategoryModel;