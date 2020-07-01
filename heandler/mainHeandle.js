

const TestBugger = require('test-bugger');
const testBugger = new TestBugger({'fileName': __filename});
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const storeDB = require('./../dbHelper/storeDB')
const fetchDB = require('./../dbHelper/fetchDB')

function authenticateToken(token, secret){
    return new Promise((res, rej)=>{
        jwt.verify(token, secret, {expiresIn: '60s'}, async(err, authdata)=>{
            if(err){
                rej(true)
            } else{
                res(authdata)
            }
        })
    })
}

function getjwtToken(user){
    return new Promise((res, rej)=>{
        jwt.sign({user:user}, 'supersecret', (err, token)=>{
            if(err){
                rej(true)
            }else{
                res(token)
            }
        })
    })   
}


class mainHeandle{
    /**
     * @async
     * Represents a alive.
     * @Function
     * @param {json} req - Request comming.
     * @param {json} res - Reponse.
     * @description - This function is for test aliveness of the api.
    */
    alive(req, res) {
        res.json({
            message: "api is alive"
        })
    }

    /**
     * @async
     * Represents a doPost.
     * @Function
     * @param {json} req - Request comming.
     * @param {json} res - Reponse.
     * @description - This function is for post
    */
    async doPost(req, res){
        let response = {}
        if(!req.body.title && !req.body.body){
            response.message = "Provide body and title"
        }else{
            try{
                let authData
                try{
                    authData = await authenticateToken(req.token, 'supersecret')
                }catch(e){
                    testBugger.errorLog("Error in auth")
                    testBugger.errorLog(e)
                }
                console.log(authData)
                let post = {"title" : req.body.title, "body" : req.body.body, "auth": authData}
                await storeDB("fakebook","post", post)
                
                response.message = "post created",
                response.auth = authData
                
            }catch(e){
                testBugger.errorLog("Error in post storing")
                testBugger.errorLog(e)
                response.message = "token is wrong"
            }
        }
        res.json(response)
    }

    async signup(req, res){
        testBugger.informLog(`Request for new user : ${req.body.firstname}`)
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            let user
            if(req.body.user && req.body.user == "admin"){
                // admin user
                user = { user: req.body.user, firstname: req.body.firstname, lastname: req.body.lastname, surname: req.body.surname ,
                    mobilenumber: req.body.mobilenumber, email: req.body.email, address: req.body.address,
                    dob: req.body.dob, password: hashedPassword }
            }else{
                user = { user: "normal", firstname: req.body.firstname, lastname: req.body.lastname, surname: req.body.surname ,
                    mobilenumber: req.body.mobilenumber, email: req.body.email, address: req.body.address,
                    dob: req.body.dob, password: hashedPassword }
            }
          
            await storeDB("fakebook","users", user)
            //const newTodo = await pool.query("INSERT INTO fake_user(first_name,last_name,surname, mobile_number, email, address, dob) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",[])
            res.json({
                message:"User is Signedup"
            })
        } catch(e) {
          testBugger.errorLog(e)
          res.status(500).send()
        }
    }
    async login(req, res){
        let cursor = await fetchDB("fakebook", "users", {"email":req.body.email})
        let response = {message: "something wrong with api"} 
        let user = await cursor.next()
        if(!user){
            response.message = "no email"
        }else{
            if(await bcrypt.compare(req.body.password, user.password)){
                let token = await getjwtToken(user)
                // console.log(token)
                response = {"token":token}
            }else{
                response.message = "password is not matched"
            }
        }
        
        res.json(response)
    }

    async getAllPost(req, res){
        let authData
        try{
            authData = await authenticateToken(req.token, 'supersecret')
        }catch(e){
            testBugger.errorLog("Error in auth")
            testBugger.errorLog(e)
        }
        let searchQ = authData.user.email
        let cursor
        try {
            cursor =  await fetchDB("fakebook", "post", {'auth.user.email': searchQ})
        } catch (error) {
            testBugger.errorLog("Error in db fetch")
            testBugger.errorLog(error)
        }
        
        let output = []
        while(await cursor.hasNext()){
            let {title,body}  = await cursor.next()
            output.push({"title": title, "body":body})
        }
        res.json(output)
    }
    
       
}

module.exports = mainHeandle


 
    
           
          







