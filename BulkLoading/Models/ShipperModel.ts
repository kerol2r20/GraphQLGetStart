import mongoose = require('mongoose');

const ShipperSchema = new mongoose.Schema({
    ShipperName: String,
    Phone: String,
});

const ShipperModel = mongoose.model('Shipper', ShipperSchema);

export default ShipperModel;