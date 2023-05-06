const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }));

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
available on the '/api/user' url */
let userRoutes = require('./route/userRoutes')
app.use('/api/user', userRoutes);

let commentingRoute = require('./route/commentingRoute')
app.use('/api/comment', commentingRoute);

app.listen(1337, () => console.log('gato listening on port 1337'));