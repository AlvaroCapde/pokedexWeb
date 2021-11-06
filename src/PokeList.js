import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function PokeList({pokemon}) {
  
  const [filter, setFilter] = useState("");
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
    
    
    
    return (

        <div className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold text-center tracking-tight text-red-500">Welcome to the pokemon list</h2>
        <div className="flex justify-center mt-10 items-center">
                        <label className="text-red-500">
                            <input
                                type="search"
                                className=""
                                placeholder="SEARCH A POKEMON"
                                onChange={handleSearchChange}
                            />
                            
                        </label>
                        <p className="text-red-600 text-sm">If no pokemon shows click x to cancel search</p>
                    </div> 

        

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pokemon.map((poke) => (
            poke.name.includes(filter) &&
            
            <div key={poke.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={poke.sprites.other.dream_world.front_default}
                  
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={"/"+poke.id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {poke.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{poke.types[0].type.name}</p>
                </div>
                
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    )
}
