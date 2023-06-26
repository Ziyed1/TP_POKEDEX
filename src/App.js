import logo from './logo.svg';
import './App.css';
import Pokémon from './components/Pokémon';
import Navbar from './components/Navbar'
import data from './json/pokedex.json'

function App() {
  

  const handleSearch = searchTerm => {
    const searchPokemon = data.filter(pokemon =>
      pokemon.name['french'].toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Recherche du Pokémon :', searchTerm);
  };

  return (
    <>
      <Navbar onSearch={handleSearch}/>
      <Pokémon></Pokémon>
    </>
      
  );
}

export default App;
