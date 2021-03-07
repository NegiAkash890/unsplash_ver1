import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router , Route , Switch, useHistory  } from 'react-router-dom'
import "./App.css";
import { login, logout, selectUser} from "./features/userSlice";
import { auth } from "./firebase";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  const history =useHistory()
  const dispatch = useDispatch()
  const  user = useSelector(selectUser)

  useEffect(() => {
  
   
     const unsub = auth.onAuthStateChanged((userAuth)=>{
       if(userAuth){
        
         dispatch(login({
           uid : userAuth.uid ,
           email : userAuth.email
         }))
       
       
       
       }
       else{
         
         dispatch(logout)
        
       
    
       }
     })
    return unsub ;
  }, [user])
 
  return (
  <Router>
  <div>
  <Switch>
    <Route path='/home'>
      <Home/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/'>
      <Login/>
    </Route>
  </Switch>
  </div>
  </Router>
  )
}

export default App;
