const express = require('express')
const app = express()

//conn to mongoDB
const dbFile = require('./conn')

//routes
const userroute = require('./rutas/usuario')

//body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', userroute)

app.get('/', (req, res) => {
    res.end('welcomer to the backend server')
})


//Server config
app.listen(5000, function(){
    console.log('The NODE server is running ok')
})