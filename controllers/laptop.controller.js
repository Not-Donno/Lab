const Laptop = require('../models/laptop.model')

exports.getLaptops = async (req, res)=>{
    const laptops = await Laptop.find();
    res.json(laptops);
}

exports.addLaptop = async (req, res) => {
    const newLaptop = new Laptop(req.body);
    await newLaptop.save();
    res.json({message: "Laptop Added!"})
}