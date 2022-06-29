import './App.css';
import {useState} from 'react';
import Axios from 'axios';
import profile from './assets/profile.png';

import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";


  const App = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
    // The light theme is used by default
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // This function is triggered when 
    // the Switch component is toggled

    const changeTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    }
    
    const light = {
      palette: {
        mode: "light",
      },
    };
    
    const dark = {
      palette: {
        mode: "dark",
      },
    };
    

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
    

<ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
  <CssBaseline />
   <Container>
   <div className="App">
      <Box component="div" p={5}></Box>
        <Card>
          <CardHeader action={
            <FormGroup>
              <FormControlLabel control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
                label="Dark Theme"/>
                </FormGroup>}/>   
            <CardContent>

              <Typography variant="h3" component="h3">
          <div className="container">

            <div className="mode"> Dark Mode is {isDarkTheme ? "On" : "Off"}</div>

          <h3> Lyrics App </h3>
          <h6>Designed with <span style={{color: "#70D3F4"}} >React</span>  </h6>
          </div>

              </Typography>
              <img className = "App-logo" src={profile} alt="Logo" />
    
              <Typography variant="body1">
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
    </Typography>
      </CardContent>
          </Card>
          </div>
      </Container>
    </ThemeProvider>

  );
 };  


export default App;
