require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoute');
const app = express()
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const MONGO_URL=process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionSuccessStatus: 200
}

app.use(express.urlencoded({extended:false}))


app.use(cors(corsOptions))
app.use(express.json())
//middleware

//routes
app.use('/api/products',productRoute); 

app.get('/',(req,res) =>{
  res.send('Hello node api')
})
app.get('/blog',(req,res)=>{
    res.send('hello blog')
})
app.use(errorMiddleware);
mongoose.
connect(MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Node API app is running on ${PORT} `)
    })
    
    console.log('connected to mongooDB')
}).catch(()=>{
    console.log(error)
})