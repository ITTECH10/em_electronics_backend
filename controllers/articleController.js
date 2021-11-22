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