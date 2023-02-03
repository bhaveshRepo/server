const express = require('express')
const { createQuestionController, getQuestionsController } = require('../controller.js/QuestionSetController')


const router = express.Router()

router.get('/:id', getQuestionsController)

router.post('/create', createQuestionController)

module.exports = router