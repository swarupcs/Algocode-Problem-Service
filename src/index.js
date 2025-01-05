const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require('./config/server.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.send({message: 'Problem Service is alive'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

