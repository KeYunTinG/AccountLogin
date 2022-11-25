const express = require('express')
const users = require('../../models/user')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.render('index')
})
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  users.findOne({ email })
    .then((item) => {
      if ((item) && (item.password === password)) {
        res.send(`<h1>Welcome back, ${item.firstName}!</h1 >`)
      } else {
        res.send("Please Check Your Email or Password.")
      }
    })

})


module.exports = router