import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Createpost from './pages/Createpost';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';


function App() {
  const [isAuth, setisAuth] = useState(localStorage.getItem('isAuth'));
  
  // console.log(auth.currentUser.displayName.slice(0,1));
 

  const signUserOut =() => {
    signOut(auth).then(()=>{
      localStorage.clear()
      setisAuth(false)
      window.location.pathname='/'
    })
  }
  return (
    <BrowserRouter>
    <Navbar isAuth={isAuth} signUserOut={signUserOut} auth={auth}/>
      <Routes>
          <Route path='/' element={<Homepage isAuth={isAuth}/>}/>
          <Route element={<ProtectedRoute isAuth={isAuth}/>}>
            <Route path='/createpost' element={<Createpost isAuth={isAuth}/>}/>
          </Route>
          <Route path='/login' element={<Loginpage isAuth={isAuth} setIsAuth={setisAuth} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
