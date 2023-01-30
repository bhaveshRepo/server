const PrismaClient = require('@prisma/client').PrismaClient
const prismaClient = new PrismaClient()


exports.createUser = async (username) => {

    
    let result = await prismaClient.user.findFirst({
        orderBy:{
            U_Id: 'desc'
        }
    })
    
    if(!result){
        let U_Id = `U0001`
        let data = await prismaClient.user.create({
            data: {
                U_Id,
                username
            }
        })
        return data
    }
}

exports.createQuestions = async (question, options, answer, userId) => await prismaClient.questions.create({
    data: {
        question,
        options,
        answer,
        userId
    }
})

exports.getQuestions = async (userId) => await prismaClient.questions.findMany({
    where: {
        userId
    }
})

// main()
//     .then(async () => {
//         await prismaClient.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prismaClient.$disconnect()
//         process.exit(1)
//     })

