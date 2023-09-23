import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebaseconfig'
import { useNavigate } from 'react-router-dom';
import {useFn} from "../context/AuthContext"
function Login() {
  // const [error, seterror] = useState(false);
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  // const navigate=useNavigate()
  // const authContext=useFn();
  // const handlelogin = (e) => {
  //   e.preventDefault()
  //   signInWithEmailAndPassword(auth, Email, Password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log("Sucess")
  //       authContext.login(Email)
  //       navigate("/",{replace:true})
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error(errorMessage)
  //       seterror(true)
  //     });
  //   navigate("/")

      
  // }
  return (
    <Container>
      {/* <form onSubmit={handlelogin}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => { setEmail(e.target.value) }}></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => { setPassword(e.target.value) }}></input>
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
        
        {error && <span>Wrong Email and password</span>}
      </form> */}
    </Container>
  )
}

const Container = styled.div``
export default Login