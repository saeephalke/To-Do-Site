import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { Textbox } from './Textbox';
import { Login } from './Login';
import { TaskDisplay } from './TaskDisplay';

function App() {
  const[data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])


  return (
    <div className="App">
      <Login></Login>

      


      <table>
        <thead>
          <th>ID</th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr>
              <td>{d.username}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
