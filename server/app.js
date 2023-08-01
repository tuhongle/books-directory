import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import BookRouter from './routes/BookRoutes.js'
import AccountRouter from './routes/AccountRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT);
        console.log('Listening to port ' + PORT)
    })
    .catch(err => {
        console.log(err)
    })

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', async(req, res) => {
    await res.redirect('/books')
})

app.use('/books', BookRouter)

app.use('/accounts', AccountRouter)