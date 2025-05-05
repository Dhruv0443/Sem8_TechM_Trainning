const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
app.use(express.json());
app.use(logger); //logger middlerware
app.use('/users',userRoutes); //users route
app.use(errorHandler); //centralised error Handler
app.listen(3000,()=> console.log(
    'Server running on port 3000'
));
