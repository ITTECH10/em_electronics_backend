const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter')
const articleRouter = require('./routers/articleRouter')

const app = express();

app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/v1/users', userRouter)
app.use('/api/v1/articles', articleRouter)

module.exports = app