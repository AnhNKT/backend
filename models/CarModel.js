const mongoose = require('mongoose')
const CarSchema = new mongoose.Schema(
    {
        name: String,
        brand: String,
        price: Number,
        image: String
    }
)
const CarModel = mongoose.model('cars', CarSchema)
module.exports = CarModel