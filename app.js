const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const users = require('./models/user')
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

require('./config/mongoose')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`)
})