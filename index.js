import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import { Connection } from './connection/Connection.js';

const app = express();
app.use(express.json())

Connection()

// router
import userRouter from './routes/authRoute.js';
app.use('/api/v1/auth', userRouter);


app.use("*", (req, res, next)=>{
    res.status(400).json({msg:"Route not found mate "})
    next()
})

const port = process.env.PORT || 3000
app.listen(port, (req, res)=>{
    console.log(`App is running on ${port}`)
})


