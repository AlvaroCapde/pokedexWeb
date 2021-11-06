
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import PageToggler from './PageToggler';

function Pokemon() {
    
    const {id} = useParams();
    const [currentID,setCurrentID] = useState(id);
    
    const [currentPokeURL,setCurrentPokeUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${currentID}`)
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const next = () => {
      const nextPoke = currentID == 20? 1:(parseInt(currentID)+1)
      navigate("/"+nextPoke)
      setCurrentPokeUrl(`https://pokeapi.co/api/v2/pokemon/${nextPoke}`)
      setCurrentID(nextPoke)
    }
    const prev = () => {
      const prevPoke = currentID == 1? 20:(parseInt(currentID)-1)
      navigate("/"+prevPoke)
      setCurrentPokeUrl(`https://pokeapi.co/api/v2/pokemon/${prevPoke}`);
      setCurrentID(prevPoke)
    }
  useEffect(() => {
    
    axios
      .get(currentPokeURL)
      .then(function (response) {
        
        const { data } = response;
        console.log(data)

        setPokemon(data);
      })
      .catch(function (error) {
        console.log("hm")
        setPokemon(false);
      });
  }, [currentPokeURL]);
  if (pokemon == undefined){
    return "Loading"
  }
  
    
    return (
        <div>
          <PageToggler next={next} prev={prev}/>
        <div className="flex justify-center mt-10">
          
            
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden w-96">
              
              
              
            
        <div class="flex-shrink-0">
          <img class="h-96 w-full object-cover" src={pokemon.sprites.other.dream_world.front_default} alt=""/>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-green-500 flex justify-around">
              <p  >
                Type:{pokemon.types[0].type.name.toUpperCase()}
              </p>
              <p className="text-red-500">
                #{pokemon.id}
              </p>
            </p>
            <a href="#" class="block mt-2">
              <p class="text-4xl font-semibold text-gray-900 text-center">
                {pokemon.name.toUpperCase()}
              </p>
              <div class="mt-3 text-base text-gray-500">
                 <div >
                 <p className="text-2xl text-red-500 text-center"> Experience: {pokemon.base_experience}</p>
                    <div className="flex justify-around">
                        <p className="text-2xl text-blue-500">Weight: {pokemon.weight}</p>
                        <p className="text-2xl text-green-500">Height: {pokemon.height}</p>
                    </div>
                 </div>
              </div>
            </a>
          </div>
          <div class="mt-6 flex justify-around">
            
            <div>
                <p className="text-2xl text-yellow-500">Moves: </p>
                {pokemon.moves.map(move => {
                    return(
                    <div >
                        <p className="text-xl text-yellow-700">{move.move.name}</p>
                    </div>
                    )
                })}
            </div>
            <div>
                <p className="text-2xl text-pink-500">Abilities: </p>
                {pokemon.abilities.map(ab => {
                    return(
                    <div >
                        <p className="text-xl text-pink-600">{ab.ability.name}</p>
                    </div>
                    )
                })}
            </div>

          </div>
          
        </div>
      </div>
            
            
        </div>
        </div>
       
    )
}


export default Pokemon;
