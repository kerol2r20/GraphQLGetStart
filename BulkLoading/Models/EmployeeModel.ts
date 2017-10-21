import mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    LastName: String,
    FirstName: String,
    BirthDate: String,
    Photo: String,
    Notes: String,
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

export default EmployeeModel;