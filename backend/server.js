const express = require("express");
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`));
