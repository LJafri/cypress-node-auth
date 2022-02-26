const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth')

dotenv.config();

connectToDB().catch(err => console.log(err));

async function connectToDB() {
    await mongoose.connect(process.env.DB_CONNECTIONSTRING, 
    { userNewUrlParse: true },
    () => console.log('Connected to test DB'));
}

app.use('/api/user', authRoute)

app.listen(3000, () => {
    console.log(`Server is running on 3000`)
})