import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import notFoundMiddleware from './middleware/not-found.js'  //Need to add .js don't know why!
import errorHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

async function start() {
    try{
        await connectDB(process.env.MONGO_URL)
        console.log("Database connected successfully")
        app.listen(port, () => console.log(`Server started at port ${5000}`))
    } catch(err) {
        console.log(err)
    }
}

start()