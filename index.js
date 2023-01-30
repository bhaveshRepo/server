const PrismaClient = require('@prisma/client').PrismaClient
const questionsRoute = require('./routes/QuestionSet');
const multer = require('multer');
const express = require('express');


const app = express();
const uploads = multer({ dest: "uploads/" })


app.use('/questions', uploads.none(), questionsRoute)

app.listen(9000, () => console.log(`listening on port 9000`))



