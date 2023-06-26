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
      <p>
        {filteredData.map((pokemon) => {
           return <>
                    <div className={pokemon.type[0]}><br/>{pokemon.name[props.language]} <br/> Type : {pokemon.type}</div>
                    <ul>
                      <li>Point de vie : {pokemon.base['HP']}</li>
                      <li>Attaque : {pokemon.base['Attack']}</li>
                      <li>Défense : {pokemon.base['Defense']}</li>
                      <li>Attaque spéciale : {pokemon.base['Sp. Attack']}</li>
                      <li>Défense spéciale : {pokemon.base['Sp. Defense']}</li>
                      <li>Rapidité : {pokemon.base['Speed']}</li>
                    </ul>
                </>
        })}
      </p>
      </div>
  );
}

export default Pokémon;
