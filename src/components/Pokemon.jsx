import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [err, setErr] = useState("")

    const fetchPokemonThen = (e) => {
        e.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=1&limit=807')
            .then((response) => {
                setPokemon(response.data.results);
                console.log(response.data);

                // .catch(err=> {
                //     console.log(err)
            })
    }


    return (
        <div >
            <div>
                <h1>Fetch all Pokemon</h1>
                <button onClick={fetchPokemonThen} >Fetch Pokemon</button>
                {pokemon.map((pokemon, i) => {
                    return (
                        <p key={i} >{pokemon.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon