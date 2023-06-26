import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pokémon from './Pokémon.jsx'

function Navbar({ onSearch }) {
    const [inputText, setInputText] = useState("");
    const [inputLanguage, setInputLanguage] = useState("");

    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    let inputLanguageHandler = (e) => {
        setInputLanguage(e.target.value);
    };

  return (
    <div className="main">
      <h1>Rechercher un Pokémon</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        
        <InputLabel id="demo-simple-select-label">Langage</InputLabel>
        <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           label="Langage"
           onChange={inputLanguageHandler}
        >
          <MenuItem value={'french'}>french</MenuItem>
          <MenuItem value={'english'}>english</MenuItem>
          <MenuItem value={'japanese'}>japanese</MenuItem>
          <MenuItem value={'chinese'}>chinese</MenuItem>
        </Select>
      </div>
      <Pokémon input={inputText} language={inputLanguage}/>
    </div>
  );
}

export default Navbar;
