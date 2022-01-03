const express = require('express');
const connect = require('./utils/connect');
const routes = require('./routes');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())
app.listen(3001, async () => {
    console.log("Server is running on port 3001");
    await connect();
    routes(app);
})