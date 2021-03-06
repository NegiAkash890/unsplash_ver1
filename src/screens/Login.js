import React, { useRef } from "react";
import "./Login.css";
import  { auth } from '../firebase'
function Login() {
  const emailRef = useRef(null) ;
  const passwordRef = useRef(null);
  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    .then((user)=>console.log(user))
    .catch((err)=>{alert(err.message)})
  };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value , passwordRef.current.value)
    .then((user)=>{
    console.log(user)
    })
    .catch((err)=>{
      alert(err.message)
    })

  };
  return (
    <div className="login">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/main.svg"} alt='main_logo'/>
        <h2>Login</h2>
        <p>Welcome Back</p>
      </div>
      <div>
        <button className="fb_btn">Login or Create Account</button>
      </div>
      <div className="login_form">
        <form>
          <div className="form_field">
            <p>Email</p>
            <input type="email" ref={emailRef}/>
          </div>
          <div className="form_field">
            <p>Password</p>
            <input type="password" ref={passwordRef}/>
          </div>
          <div className="lg_bt">
            <button className="login_btn" onClick={login} type='submit'>
              Login
            </button>
            <p>OR</p>
            <button className="signup_btn" onClick={register} type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
