const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = Schema({
  name: { type: String, required: true, minlength: 2 },
  quote: { type: String, required: true, maxlength: 50}
}, {timestamps: true})

module.exports = mongoose.model('Quote', quoteSchema)
