const express = require('express')
const router = express.Router()
const CarModel = require('../models/CarModel')

router.get('/', async (req, res) => {
    try {
        var cars = await CarModel.find({})
        res.json(cars)
    }catch (err){
        res.send(err)
    }
})

module.exports = router