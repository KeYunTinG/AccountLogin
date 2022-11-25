const express = require('express')
const users = require('../../models/user')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router