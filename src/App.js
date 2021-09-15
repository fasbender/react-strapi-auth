import React, { useState } from 'react';
import Register from './components/Register';
import Profile from './components/Profile';
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {!user ? <Register updateUser={(user) => setUser({user})}/> : <Profile user={user}/>}
    </div>
  );
}

export default App;
