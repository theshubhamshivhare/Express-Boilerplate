const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');

//Middlewares
app.use(bodyParser.json());
app.use(logger('dev'));

//All router paths
app.use('/', indexRouter);





//Server Activated
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});