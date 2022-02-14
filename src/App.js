import logo from './logo.svg';
import './App.css';
import {getMusicData} from './api'
import { useEffect } from 'react';
import AppBar from './components/AppBar/AppBar';

function App() {

  useEffect(() => {
    getMusicData()
    .then((data) => {
      // do stuff with responseJSON here...
      console.log(data) })
  }, []);

  return (
    <div className="App">
      <AppBar />
    </div>
  );
}

export default App;
