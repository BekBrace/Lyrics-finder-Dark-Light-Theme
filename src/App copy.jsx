import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }

  Axios.get(
    `https://api.lyrics.ovh/v1/${artist}/${song}`).then(res=>{
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    })
    
}

  return (
    <div className="App">
     <h1> Lyrics App </h1>
     <input className='input_Field' 
     type="text" 
     placeholder='enter artist name...' 
     onChange={(e)=>{setArtist(e.target.value)}}
     />     
     <input 
     className='input_Field' 
     type="text" 
     placeholder='enter song name...'
     onChange={(e)=>{setSong(e.target.value)}}
     />  
    <button 
    className="btn"
    onClick={()=>searchLyrics()}>
      Find
    </button>
    <hr />
    <pre>{lyrics}</pre>
    </div>
  );
}

export default App;
