const express = require('express')
const { generateCode } = require('../middleware')
const { createQuestions, getQuestions } = require('../prismaClient')
const PrismaClient = require('@prisma/client').PrismaClient
const prismaClient = new PrismaClient()

const router = express.Router()

router.get('/:id', async (req, res) => {

    const q_set = req.params.id

    let result = await getQuestions(q_set)

    console.log(result);
    res.send({
        "type": `Success`,
        "data": {
            result
        }
    })
})

router.post('/create', async (req, res) => {

    let q_set;
    let { data } = req.body
    let userQuestions = []
    let dataParsedIntoJson = JSON.parse(data)


    let lastId = await prismaClient.questions.findFirst({
        orderBy: {
            id: 'desc'
        }
    })

    if (!lastId) {
        q_set = `U1001`
    } else {
        q_set = generateCode(lastId.q_set)
    }

    // let userQuestion = [{ question: "", optionA: "", optionB: "", optionC: "", optionD: "", answer: "" }]

    dataParsedIntoJson.map((object) => {
        if (object.question != "" && object.option.length != 0 && object.answer != "") {
            userQuestions.push({
                question: object.question,
                optionA: object.option[0],
                optionB: object.option[1],
                optionC: object.option[2],
                optionD: object.option[3],
                answer: object.answer,
                q_set
            })
        }
    })

    let result = await createQuestions(userQuestions)

    res.send({
        "type": `Success`,
        "data": {
            link : `http://localhost:9000/question/${q_set}`,
            Question_set: q_set
        }
    })
})

module.exports = router