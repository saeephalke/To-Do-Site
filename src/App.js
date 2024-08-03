import logo from './logo.svg';
import './App.css';
import { Button } from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do App
      </header>
      <p2> Do not put any personal information into the App</p2>

      <div>

      Username: <input name="username"/> 
      Password: <input name="password"/>
      </div>

      <button name="logIn">Log In</button>
      <button name="signUp">Sign Up</button>

      <Button/>

    </div>
  );
}

export default App;
