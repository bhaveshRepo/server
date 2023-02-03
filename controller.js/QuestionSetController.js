const { generateCode } = require('../middleware')
const { createQuestions, getQuestions } = require('../prismaClient')
const PrismaClient = require('@prisma/client').PrismaClient
const prismaClient = new PrismaClient()

exports.createQuestionController = async (req, res) => {

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

    if (result.count == 0) {
        res.status(400).send({
            "type": `error`,
            "msg": 'Something went wrong'
        })
    }

    res.send({
        "type": `Success`,
        "data": {
            link: `http://localhost:5173/bank/${q_set}`,
            Question_set: q_set
        }
    })
}


exports.getQuestionsController = async (req, res) => {

    const q_set = req.params.id

    let result = await getQuestions(q_set)

    res.send({
        "type": `Success`,
        "data": {
            result
        }
    })
}