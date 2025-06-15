const express = require('express');
const path = require('path');
const route = require('router');

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const govtSchema_router = require('./routes/govtScheme_router');
const jobs_router = require('./routes/jobs_router');
const upskill_router = require('./routes/upskill_router');
const veerCommunity_router = require('./routes/veerCommunity_router');


app.listen(8080, () => {
    console.log(" Server is running ");
});