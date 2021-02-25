// Body parser 
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Require Libraries
const express = require('express')

// App Setup
const app = express()
const port = 3000

// middleware
const exphbs = require('express-handlebars')

// new post 
require('./controllers/posts.js')(app);

// mongodb NoSQL database 
// Set db
require('./data/reddit-db');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Add after body parser initialization!
app.use(expressValidator());

// Middleware 
// "middleware" library will be used to allow Express (our web framework) to 
// render HTML templates and send them back to the client using a new function: 
// res.render('template-name', { variables })
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Routes
// home 
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/posts/new', (req, res) => {
  res.render('posts-new')
})

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Node server running on port localhost:${port}`)
})
