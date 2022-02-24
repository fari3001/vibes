// import './App.css';
import {getMusicData} from './api';
import Artists from './components/Artists/Artists';
import { useEffect, useState } from 'react';
import AppBar from './components/AppBar/AppBar';

function App() {
  const[artist, setArtist] = useState(null)

  useEffect(() => {
    getMusicData()
    .then((data) => {
      // do stuff with responseJSON here...
      console.log(data.share.image) 
      setArtist(data)
      
    })
  }, []);

  return (
    <div className="App">
      <AppBar />
      <Artists artist={artist}/>
    </div>
  );
}

export default App;
