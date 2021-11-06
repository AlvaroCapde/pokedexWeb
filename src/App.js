
import { useState , useEffect } from 'react';
import './App.css';
import PokeList from './PokeList';
import axios from 'axios';
import PageToggler from './PageToggler';

function App() {
  const [pokemon,setPokemon] = useState([]);
  
  const [loading, setLoading] = useState(true)
  
  

  useEffect(() => {
    setLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setLoading(false);
      res.data.results.forEach(poke => {
        axios.get(poke.url).then(response => {
          setPokemon(currentList => [...currentList,response.data])
        })
      })
    })
    
  },[]);
  if(loading) return "Loadging mighty pokemons!"
  
  return (
    <div>
    <PokeList pokemon={pokemon}/>
    </div>
  );
}

export default App;
