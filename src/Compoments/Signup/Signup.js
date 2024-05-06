import React from "react";
import "./Signup.css"
// import { Link,useNavigate } from 'react-router-dom';
import { useState } from "react";
// import axios from 'axios'
// import { Button, Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImage] = useState('')
  // const [error, setError] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = async () => {
  //   if (email === 'prajwal@mail.com' && password === '123456') {
  //     // setIsLoggedIn(true);
  //     alert('Successfully logged in');
  //   } else {
  //     setError('Invalid email or password');
  //   }
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setEmail('');
  //   setPassword('');
  // };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateImage = (e)=> {
    setImage(e.target.files[0])
  }

  const submitUser = (e) => {
    e.preventDefault();
  
    if (!img) {
      alert('Please select a file');
      return;
    }
  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', img);
    console.log(formData);
    console.log(JSON.stringify(formData));
  
    fetch('http://localhost:5001/signup?email='+email+'&password='+password+'&image='+img, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log("User registered successfully");
        if (!response.ok) {
          throw new Error("Failed to sign up");
        }
        
        return response.json();
      })
      .then((data) => {
        console.log(data); // Assuming server returns some response
        // Do something with the response if needed
      })
      .catch((err) => {
        console.log(err);
        // Handle errors
      });
      alert("User registered successfully");
  };
  return (
    <div className="signup">
      <form enctype="multipart/form-data">
        <h1> Sign Up </h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={updateEmail}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={updatePassword}
        />
        <label htmlFor="img">Profile picture </label>
        <input
          type="file"
          id="img"
          name="img"
          // value={img}
          onChange={updateImage}
        />
        <input type="submit" value="Submit" onClick={submitUser} />
      </form>
    </div>
  );
};

// export const Signup = () => {
//     const history= useNavigate();
// const [email,setEmail]=useState('')
// const [password,setPassword]=useState('')

// async function submit (e){
//   e.preventDefault();
//   try{
//     await axios.post('http://localhost:3000/signup',{
//       email, password
//     })
//     .then(res=>{
//         if(res.data==="exist"){
//         alert('user already exist')
//         }
//         else if(res.data==='notexist'){
//             history("/",{state:{id:email}})
//         }
//       })
//       .catch(e=>{
//         alert('invalid credentials')
//         console.log(e);
//       })
//   }
//   catch{
//     console.log(e);
//   }
// }

//   return(
//     <div className='login'>
//       <h1>
//         Signup
//       </h1>
//       <form action='POST'>
//             <input type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='' id=''/>
//             <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='' id=''/>
//             <input type='file'/>
//       <input type='submit' onClick={submit}/>
//       </form>

//       {/* <br/> */}
//       <p>or</p>
//       {/* <br/> */}

//       <Link to='/profile'>Profile Page</Link>
//     </div>
//   )
// }
