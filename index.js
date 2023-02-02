const PrismaClient = require('@prisma/client').PrismaClient
const questionsRoute = require('./routes/QuestionSet');
const cors = require('cors')
const multer = require('multer');
const express = require('express');


const app = express();
const uploads = multer({ dest: "uploads/" })

app.use(cors())
app.use('/question', uploads.none(), questionsRoute)

app.listen(9000, () => console.log(`listening on port 9000`))



