const mongoose = require('mongoose')
const IdeaSchema = require('../db/schemas/Idea')

const Idea = mongoose.model('Idea', IdeaSchema)

module.exports = Idea