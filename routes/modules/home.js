const express = require('express')
const users = require('../../models/user')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  const firstName = req.session.user
  if (firstName) {
    res.render('welcome', { firstName })
  } else {
    res.render('index')
  }
})

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  users.findOne({ email })
    .then((item) => {
      if ((item) && (item.password === password)) {
        req.session.user = item.firstName
        firstName = item.firstName
        res.render('welcome', { firstName })
      } else {
        res.send("Please Check Your Email or Password.")
      }
    })

})

router.get('/logout', (req, res) => {
  //session內建清除session store
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  res.redirect('/')
})

module.exports = router