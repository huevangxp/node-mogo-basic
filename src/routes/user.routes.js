const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/user', controller.create);
    app.post('/register', controller.register);
    app.post('/login', controller.login);
    /**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of products
 *     tags: [Users]
 *     description: Retrieve a list of products from the API.
 *     responses:
 *       200:
 *         description: Successful response with a list of products.
 *         content:
 *           application/json:
 *             example:
 *               - product_name: "Product A"
 *                 price: 19.99
 *               - product_name: "Product B"
 *                 price: 29.99
 *       401:
 *         description: Unauthorized - Authentication required.
 *       500:
 *         description: Internal server error - Something went wrong on the server.
 */
    app.get('/users', controller.select);
    app.delete('/user/:id', controller.delete);
    app.get('/user/:id', controller.selectById);
    app.put('/user/:id', controller.update);
}