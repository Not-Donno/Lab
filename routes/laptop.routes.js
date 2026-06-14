const express = require('express');
const router = express.Router();
const controller =require('../controllers/laptop.controller');

router.get('/', controller.getLaptops);
router.get('/',controller.addLaptop);

module.exports = router;