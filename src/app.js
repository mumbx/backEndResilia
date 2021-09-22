const express = require('express')
const cors = require('cors')
const bd = require('./database/sqlite-db')
const students = require('./controllers/student-controller')
const computers = require('./controllers/computer-controller')
const app = express()

app.use(cors())
app.use(express.json())

//rotas
students(app, bd)
computers(app, bd)

app.get('/', (req, res)=>{
    res.send('<h1>hello world')

})

app.listen(3000, ()=>{
    console.log('Estou te escutando na porta 3000')
})