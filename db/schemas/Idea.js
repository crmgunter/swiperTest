const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IdeaSchema = new Schema({
    title: String,
    description: String
})

module.exports = IdeaSchema