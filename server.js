const express = require('express');
const app = express();

// Include the userRoutes module
let userRoutes = require('./server/route/userRoutes')

app.listen(1337, () => console.log('gato listening on port 1337'));