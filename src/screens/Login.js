import React, { useEffect, useRef } from "react";
import "./Login.css";
import  { auth } from '../firebase'
import { logout } from "../features/userSlice";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
function Login() {
  const emailRef = useRef(null) ;
  const passwordRef = useRef(null);
  const history = useHistory()
  const dispatch = useDispatch()
  const redirect = path =>{
    history.push(path) ;
  }
  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        redirect('/home')
      } else {
        dispatch(logout);
        redirect('/login')
      }
    });
    return unsubscribe;
  }, []);
  
  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    .then((user)=>{

      redirect('/home')})
    .catch((err)=>{alert(err.message)})
  };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value , passwordRef.current.value)
    .then((user)=>{
  
    redirect('/home')
    })
    .catch((err)=>{
      alert(err.message)
    })

  };
  return (
    <div className="login">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/images/icon_192x192.png"} alt='main_logo'/>
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
