const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const moment = require('moment-timezone');
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
let db_M = require('./database');
global.db_pool = db_M.pool;
const port = 5454;
app.use(express.json());
app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});
const my_ride =require('./routers/my_ride');
app.use('/my_ride',my_ride);