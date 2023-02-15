import { useEffect, useState } from "react";
import { Button } from "./assets/components/button";
import Pokedex from "./assets/images/pokedex.png";

function App() {
    const [number, setNumber] = useState(1);

    const [pokemon, setPokemon] = useState({});
    
    const loadPokemon = async (number) => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        const pokemonData = await data.json();
        console.log(pokemonData)
        setPokemon({
            "id": pokemonData.id,
            "name": pokemonData.name,
            "image": pokemonData["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
        });
    };
    
    useEffect(
        ()=>{
            loadPokemon(number);
        }, [number]
    );
    
    function NumberLessOrPlus (bool) {
        if(bool){
            setNumber((state) => {
                return (state < 649?state + 1:state);
            })
        }else{
            setNumber((state) => {
                return (state > 1?state - 1:state);
            })
        }
    }

    return (
        <div className="main">
            <img src={pokemon.image} alt="" className="poke-image"/>
            <img src={Pokedex} alt="pokedex" className="pokedex"/>
            <h1 className="poke-name"><span>{pokemon.id} - </span>{pokemon.name}</h1>
            <div className="buttons">
                <Button action="< Prev" NumberLessOrPlus={NumberLessOrPlus}/>
                <Button action="Next >" NumberLessOrPlus={NumberLessOrPlus}/>
            </div>
        </div>
    );
}

export default App;
