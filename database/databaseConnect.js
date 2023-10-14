const mongoose = require('mongoose')
require('dotenv').config()

const DATABASE = process.env.DATABASE_URL
async function connectDatabase(){


    const result = await  mongoose.connect(DATABASE)

    return result
} 

module.exports = connectDatabase