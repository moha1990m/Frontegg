import React from 'react';
import { useAuth } from '@frontegg/react'
import { AdminPortal } from '@frontegg/react';
import './App.css'


function App() {
  const { user, isAuthenticated } = useAuth();
  const handleClick = () => {
    AdminPortal.show();
  };
  
  <button onClick={handleClick}>Settings</button>

  return (
    <div className='App'>
      {isAuthenticated ? 
        <div className='container'>
          <img className='profile' src={user.profilePictureUrl} alt={user.name} />
          <span className='name'>{user.name}</span>
             <button className='setting-btn' onClick={handleClick}>Settings</button>
            <div>
           <a href="http://localhost:3000/account/logout"> <button  className='logout-btn'>Logout</button></a>
            </div>
        </div>
      :window.location.href='http://localhost:3000/account/sign-up'}
    </div>
  );
}

export default App;