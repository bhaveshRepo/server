const express = require('express')
const { getQuestions, createQuestions, createUser } = require('../prismaClient')

const router = express.Router()

router.get('/:id', async (req, res) => {

    const id = req.params.id

    let result = await getQuestions(parseInt(id))

    console.log(result);
    res.send({
        "type": `Success`,
        "data": {
            result
        }
    })
})

router.post('/create/:id', async (req, res) => {

    const id = req.params.id
    let { question, options, answer } = req.body

    let result = await createQuestions(question, options, answer, parseInt(id))

    res.send({
        "type": `Success`,
        "data": {
            result
        }
    })
})

router.get('/create/user', async (req, res) => {
    let result = await createUser();
    res.json({ result });
})

module.exports = router