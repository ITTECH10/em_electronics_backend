const express = require('express')
const authController = require('./../controllers/authController')

const router = express.Router()

router.route('/signup')
    .post(authController.signup)

router.route('/login')
    .post(authController.login)

// BELLOW ROUTES ARE PROTECTED
router.use(authController.protect)

module.exports = router