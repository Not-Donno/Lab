const mongoose = require('mongoose')
const LaptopSchema = new mongoose.Schema({
    modelName: String,
    brand: String,
    price: Number
});

module.exports = mongoose.model('Laptop',LaptopSchema)