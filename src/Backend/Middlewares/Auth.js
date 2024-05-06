// const User = require("../model/user")

// let isLoggedIn=(res,req,next)=>{
//     let token =req.header('authorization')

//     if(token){
//         res.status(403).send('token is required')
//     }
//     try{
//         let user = jwt.verify(token, process.env.SECRET_KEY)
//         req.user= user
//         next()
//     }
//     catch(err){
//         re.status(401).send('token is required...!')
//     }
// }

// module.exports = isLoggedIn