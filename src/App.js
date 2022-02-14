import logo from './logo.svg';
import './App.css';
import {getMusicData} from './api'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    getMusicData()
    .then((response) => {
      // do stuff with responseJSON here...
      console.log(response) })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
