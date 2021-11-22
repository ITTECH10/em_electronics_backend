const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    articleId: {
        type: Number
    },
    name: {
        type: String
    },
    number: {
        type: Number
    },
    codedNumber: {
        type: String
    },
    image: {
        type: String
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article