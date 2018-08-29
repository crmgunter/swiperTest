const express = require('express')
const Idea = require('../models/Idea')
const router = express.Router()

router.get('/', (req, res) => {
  Idea.find({}).then(ideas => {
    res.json(ideas)
  })
  .catch((err) => console.log(err))
})

module.exports = router