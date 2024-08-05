import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { useEffect } from 'react';

function App() {
  const[data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }, [])


  return (
    <div className="App">
      <table>
        <thead>
          <th>User</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key = {i}>
              <td>{d.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
