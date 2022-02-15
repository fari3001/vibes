// import './App.css';
import {getMusicData} from './api';
import Artists from './components/Artists/Artists';
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
      <Artists />
    </div>
  );
}

export default App;
