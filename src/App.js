import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Createpost from './pages/Createpost';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';


function App() {
  const [isAuth, setisAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut =() => {
    signOut(auth).then(()=>{
      localStorage.clear()
      setisAuth(false)
      window.location.pathname='/'
    })
  }
  return (
    <BrowserRouter>
    <nav>
      <span>alpha ver.</span>
      <div className='nav--insideWrapper'>
        <Link to='/' className='navbar--btn'>Home</Link>
        <Link to='/createpost' className='navbar--btn'>Create New Post</Link>
        {!isAuth ? <Link to='/login' className='navbar--btn'>Login</Link> : <button className='navbar--btn' onClick={signUserOut}>LogOut</button>}
      </div>
    </nav>
      <Routes>
          <Route path='/' element={<Homepage isAuth={isAuth}/>}/>
          <Route path='/createpost' element={<Createpost isAuth={isAuth}/>}/>
          <Route path='/login' element={<Loginpage isAuth={isAuth} setIsAuth={setisAuth} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
