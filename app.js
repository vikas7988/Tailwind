const express = require('express')
const router = require('./router/data')
const connectDatabase = require('./database/databaseConnect')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use('/', router)






connectDatabase().then(()=>{
    app.listen(3035, ()=>{
        console.log("Server is listening at 3035")
    })
})