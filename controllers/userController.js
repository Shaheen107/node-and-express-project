const expressAsyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")


// Creating User 
const registerUser = expressAsyncHandler(async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findOne({email})

    if(userAvailable){
        res.status(400)
        throw new Error("User already registerd")
    }

    // Hash password 
    const hashedPassword = await bcrypt.hash(password,10)  //10 is number of salt prompts or rounds
    console.log("Hash Password", hashedPassword);

    // Now creating password
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })
    console.log(`User created ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({message: "register user"})
})



// Login User 
const loginUser = expressAsyncHandler( async (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("All field are mandatary")
    }

    const user = await User.findOne({email});
    // compare password with hashed password 
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            // payload has information which we want in our token 
            user:{ // user object as payload
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
        );
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("email or passowrd is not valid")
    }
})

const currentUser = expressAsyncHandler(async (req, res)=>{
    res.json(req.user)
})

module.exports = {
    registerUser,
    loginUser,
    currentUser,
}