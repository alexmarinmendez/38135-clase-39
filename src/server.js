import express from 'express'
import usersRouter from './routes/users.router.js'
import handlebars from 'express-handlebars'

//DIRNAME
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/users', usersRouter)

//MOTOR DE PLANTILLAS
app.engine('hbs', handlebars.engine({extname: '.hbs', defaultLayout: 'index.hbs'}))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.listen(8080, () => console.log('Server Up'))