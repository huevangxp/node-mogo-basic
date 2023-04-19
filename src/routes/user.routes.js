const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/user', controller.create);
    app.post('/register', controller.register);
    app.post('/login', controller.login);
    app.get('/users', controller.select);
    app.delete('/user/:id', controller.delete);
    app.get('/user/:id', controller.selectById);
    app.put('/user/:id', controller.update);
}