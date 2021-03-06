const express = require('express')
const cors = require('cors')
const bd = require('./database/sqlite-db')
const students = require('./controllers/student-controller')
const computers = require('./controllers/computer-controller')
const loans = require('./controllers/loan-controller')
const app = express()
const porta = process.env.PORT||3005
app.use(cors())
app.use(express.json())

//rotas
students(app, bd)
computers(app, bd)
loans(app, bd)

app.listen(porta, ()=>{
    console.log('Estou te escutando na porta ' + porta)
})