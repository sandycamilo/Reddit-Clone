// Require Libraries
const express = require('express')

// App Setup
const app = express()
const port = 3000
app.use(express.static('public'));

// Middleware 
// "middleware" library will be used to allow Express (our web framework) to 
// render HTML templates and send them back to the client using a new function: 
// res.render('template-name', { variables })
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Routes
app.get('/', (req, res) => {
  res.render('home')
})

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Node server running on port localhost:${port}`)
})
