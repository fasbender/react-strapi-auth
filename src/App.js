import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Profile from './components/Profile';
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      setUser({user})
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="App">
      {!user ? <Register updateUser={(user) => setUser({user})}/> : <Profile user={user} handleLogout={handleLogout}/>}
    </div>
  );
}

export default App;
