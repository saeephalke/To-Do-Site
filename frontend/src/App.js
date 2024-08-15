import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Login } from './Login';
import { TaskDisplay } from './TaskDisplay';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export const UserContext = React.createContext();
function App() {
  const[data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])

  const[user, setUser] = useState("")


  return (
    <>
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login/>}></Route>
          <Route path='tasks' element={<TaskDisplay username={user}/>}></Route>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>

    </>
  
  );
}

export default App;
