import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


app.get('/',(req,res, next)=>{
    res.send('Hello Aditya')
})

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port', process.env.PORT)
})