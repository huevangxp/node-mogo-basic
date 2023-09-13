const router = require('./src/routes/routes');
const ConnDB = require('./src/configs/db');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();

const { swaggerSpec, swaggerUi } = require('./src/configs/swagger');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'10mb', extended:true, parameterLimit:500000}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router)

ConnDB()

app.listen(port, () => {
    console.log('server runing on port', port);
})