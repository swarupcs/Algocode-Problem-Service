const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require('./config/server.config');
const apiRouter = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get('/ping', (req, res) => {
    res.send({message: 'Problem Service is alive'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

