import React, { useState, useEffect } from 'react';
import data from '../json/pokedex.json'
import '../style/pokemon.css'

function Pokémon(props) {


  const filteredData = data.filter((pokémon) => {
    if (props.input === '') {
        return pokémon;
    }
    else {
        return pokémon.name['french'].toLowerCase().includes(props.input)
    }

})

  return (
    <div>
        {filteredData.map((pokemon) => {
           return <div className='card-container'>
                    <div className={` card ${pokemon.type[0]}`}>
                      <p className='card-title'>{pokemon.name[props.language]}</p>
                      <p className='card-type'>Type: {pokemon.type}</p>
                      <ul>
                        <li className='hp'>Point de vie : {pokemon.base['HP']}</li>
                        <li className='attack'>Attaque : {pokemon.base['Attack']}</li>
                        <li className='defense'>Défense : {pokemon.base['Defense']}</li>
                        <li className='sp-attack'>Attaque spéciale : {pokemon.base['Sp. Attack']}</li>
                        <li className='sp-defense'>Défense spéciale : {pokemon.base['Sp. Defense']}</li>
                        <li className='speed'>Rapidité : {pokemon.base['Speed']}</li>
                      </ul>
                    </div>
                </div>
        })}
      </div>
  );
}

export default Pokémon;
