const PrismaClient = require('@prisma/client').PrismaClient
const prismaClient = new PrismaClient()


exports.createQuestions = async (data) => {
    let result = await prismaClient.questions.createMany({ data })
    return result;
}

exports.getQuestions = async (q_set) => await prismaClient.questions.findMany({
    where: {
        q_set
    }
})
