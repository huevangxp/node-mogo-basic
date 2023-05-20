const controller = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/product', controller.create);
    app.get('/products', controller.selectAll);
    app.get('/product/:id', controller.selectById);
    app.delete('/product/:id', controller.delete);
    app.put('/product/:id', controller.update);
}