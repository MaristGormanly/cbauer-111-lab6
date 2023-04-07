const express = require('express');
const app = express();

app.use(express.static('./client/public'));

app.get('/', function (req, res) {
	res.sendFile('feed.html', {root: './client/views' })
})

app.get('/signup', function (req, res) {
	res.sendFile('signup.html', {root: './client/views'})
})

app.get('/login', function (req, res) {
	res.sendFile('login.html', {root: './client/views'})
})

/* Include the userRoutes module (do for each object in RESTful stack),
app.use adds your new routing module and makes all the routes you create in it
-available on the '/api/user' url */
let userRoutes = require('./route/userRoutes')
app.use('api/user', userRoutes);

app.listen(1337, () => console.log('gato listening on port 1337'));