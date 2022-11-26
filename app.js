const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const users = require('./models/user')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('trust proxy', 1)

app.use(session({
    secret: 'secret',
    name: 'user',
    resave: true,
    saveUninitialized: false,
}))

require('./config/mongoose')

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`)
})