const AppError = require('./../utils/appError')
const catchAsync = require('./../utils/catchAsync')
const Article = require('./../models/articleModel')

exports.createArticle = catchAsync(async (req, res, next) => {
    const article = await Article.create({
        articleId: req.body.articleId,
        name: req.body.name,
        number: req.body.number,
        codedNumber: req.body.codedNumber,
        image: req.body.image,
    })

    res.status(201).json({
        message: 'success',
        article
    })
})

exports.getAllArticles = catchAsync(async (req, res, next) => {
    const articles = await Article.find()

    if (!articles) {
        return next(new AppError('No articles found'))
    }

    res.status(200).json({
        message: 'success',
        articles
    })
})