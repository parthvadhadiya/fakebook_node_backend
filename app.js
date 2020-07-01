
const express = require('express')
var bodyParser = require('body-parser')
const Handler = require('./heandler/mainHeandle')
const handler = new Handler()
const app = express()

app.use(bodyParser.urlencoded(
    {extended: true}
));
app.use(bodyParser.json());

function verifyToken(req, res, next){
    const reqHeaders = req.headers['authorization']
    if(typeof reqHeaders !== 'undefined'){
        const bearer = reqHeaders.split(' ')[1]
        req.token = bearer
        next()
    }else{
        res.sendStatus(403)
    }
}

app.get('/api', handler.alive)
app.post('/api/posts', verifyToken, handler.doPost)
app.post('/api/signup', handler.signup)
app.post('/api/login', handler.login)
app.get('/api/getposts', verifyToken, handler.getAllPost)
app.listen(5000, () =>{
    console.log("Server is running 5000")
})
