const express = require('express')
const session = require('express-session')
const studentroutes = require('./router/studentroutes')
const app = express()

const port = process.env.PORT || 5000

// session
app.use(session({
    name : 'sessionbydaya',
    secret : 'iamkey',
    resave : false,
    saveUninitialized : true,
    cookie : {
        maxAge : 200000,
        originalAge : 200000
    }
}))

app.use('/', studentroutes)
app.get('/', (req, res)=>{

    res.send({status : "Ok"})

})

app.listen(port, ()=>{

    console.log(`server is running at http://localhost:${port}`)

})