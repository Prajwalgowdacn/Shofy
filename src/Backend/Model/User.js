let mongoose=require('mongoose')

let userSchema= new mongoose.Schema({
    // full_name:{type:String},
    email:{type:String},
    password:{type:String},
    img:
    {
        data: Buffer,
        contentType: String
    }
    // token:{type:String}
})
const User = mongoose.model('User', userSchema);
module.exports= User;
