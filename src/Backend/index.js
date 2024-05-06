const express = require('express');
const app = express();
const formidable = require('formidable');
const bcrypt = require('bcrypt');
require('dotenv').config();
require('./Configure/database').connect();
const User = require('./model/user');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path = require('path')
// const authMiddleWare = require('./Middlewares/Auth')

app.use(cors());

var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer({ storage: storage });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Rename the file with current timestamp
    },
  });

  

const upload = multer({ 
    storage: storage,
    fileFilter: function(req, file, cb) {
      if (file.fieldname === "image") {
        cb(null, true);
      } else {
        cb(new Error("Unexpected field"));
      }
    }
  });
  

  app.post('/signup', upload.single('image'), async (req, res) => {
    try {
        // Check if the password is provided in the request query
        console.log(req);
        if (!req.query.password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const salt = await bcrypt.genSalt(10); // Generate a salt

        // Check if salt is generated successfully
        if (!salt) {
            return res.status(500).json({ error: 'Failed to generate salt' });
        }

        const encrypt_password = await bcrypt.hash(req.query.password, salt); // Hash the password with the generated salt

        const user = await User.create({
            email: req.query.email,
            password: encrypt_password,
            img: {
                data: fs.readFileSync(path.join(__dirname, 'uploads', req.file.filename)),
                contentType: 'image/png'
            }
        });

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});



app.get('/login', async (req,response)=> {
    const email = req.query.email;
    const password = req.query.password;
    // console.log(email,password);
    const user = await User.findOne({ email });
    // console.log(user);
    if(!user) {
        response.send({success: false, message:"Invalid credentials"})
    }
    else {
        await bcrypt.compare(password, user.password, function(err, res) {
            if (err){
              // handle error
              response.send("Invalid credentials")
            }
            if (res) {
              // Send JWT
              // const createToken = async()=>{
              //   const token = await jwt.sign({_id:user._id,email,password,img},process.env.SECRET_KEY);
              //   console.log(token);

              //   const tokenVer= await jwt.verify(token, process.env.SECRET_KEY);
              //   console.log(tokenVer);}
            
              // createToken()



              response.send({success: true,user: user, message: 'user logged in succesfully'});
            } else {
              // response is OutgoingMessage object that server response http request
              return response.json({success: false, message: 'passwords do not match'});
            }
          });
    }


})


const createToken = async()=>{
    const token = await jwt.sign({_id:'66330decb31d2a9cf5646835'},process.env.SECRET_KEY);
    console.log(token);
  }

  createToken()

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
