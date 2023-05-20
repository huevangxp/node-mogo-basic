const express = require('express');
const router = express.Router();

const userRoute = require('./user.routes');
const productRoute = require('./product.routes');

userRoute(router);
productRoute(router);

module.exports = router;