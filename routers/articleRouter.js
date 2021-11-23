const express = require('express')
// const authController = require('./../controllers/authController')
const articleController = require('./../controllers/articleController')

const router = express.Router()

// BELLOW ROUTES ARE PROTECTED
// router.use(authController.protect)

router.route('/')
    .post(articleController.createArticle)
    .get(articleController.getAllArticles)

module.exports = router