const express = require('express')
const Idea = require('../models/Idea')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
      const ideas = await Idea.find({})
      res.json(ideas)
    } catch (error) {
      console.log(error)
    }
  })

  router.get('/:id', (req, res) => {
      const ideaId = req.params.id
      const idea = Idea.findById(ideaId)
      .then((idea) => {
          res.json(idea)
      }).catch((err) => {
          console.log(err)
      })
  })

  router.post('/', async (req, res) => {
    try {
      const newIdea = await Idea.create({})
      res.json(newIdea)
    } catch (error) {
      console.log(error)
    }
  })

  router.patch('/:id', (req, res) => {
        const idea = req.params.id
        const updatedIdea = req.body
        const savedIdea = Idea.findByIdAndUpdate(idea, updatedIdea)
        .then((updatedIdea) => {
            res.json(savedIdea)
            // res.redirect('/api/ideas')
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
  })

  router.delete('/:id', (req, res) => {
        const idea = req.params.id
        Idea.findByIdAndRemove(idea)
        .then(() => {
            console.log('deleted')
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router