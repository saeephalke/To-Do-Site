import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { Textbox } from './Textbox';
import { Login } from './Login';
import { TaskDisplay } from './TaskDisplay';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';



function App() {
  const[data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])


  return (
    <>
      <BrowserRouter> 
      <Routes>
      <Route path='' element={<Login/>} ></Route>
      <Route path='tasks' element={<TaskDisplay/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
