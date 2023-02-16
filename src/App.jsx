import { useEffect, useState } from "react";
import { Button } from "./assets/components/button";
import Pokedex from "./assets/images/pokedex.png";
import Load from "./assets/images/load.gif";
import { CardInfo } from "./assets/components/cardinformations";

function App() {
    const [number, setNumber] = useState(1);

    const [pokemon, setPokemon] = useState({});

    const [classCard, setClassCard] = useState("backgroundNone");

    const loadPokemon = async (number) => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        const pokemonData = await data.json();
        setPokemon({
            id: pokemonData.id,
            name: pokemonData.name,
            imageGif:
                pokemonData["sprites"]["versions"]["generation-v"][
                    "black-white"
                ]["animated"]["front_default"],
            image3D: pokemonData["sprites"]["other"]["home"]["front_default"],
            imageCard:
                pokemonData["sprites"]["other"]["official-artwork"][
                    "front_default"
                ],
            stats: pokemonData.stats,
            types: pokemonData.types,
            weight: pokemonData.weight,
            height: pokemonData.height,
        });
    };
    useEffect(() => {
        setPokemon({});
        setTimeout(() => {
            loadPokemon(number);
        }, 700);
    }, [number]);

    function NumberLessOrPlus(bool) {
        if (bool) {
            setNumber((state) => {
                return state < 649 ? state + 1 : state;
            });
        } else {
            setNumber((state) => {
                return state > 1 ? state - 1 : state;
            });
        }
    }

    function ToggleClassCard(event) {
        if (
            pokemon.image3D &&
            pokemon.name &&
            event.currentTarget === event.target
        ) {
            if (classCard === "backgroundBlock") {
                setClassCard("backgroundNone");
            } else {
                setClassCard("backgroundBlock");
            }
        }
    }

    return (
        <div className="main">
            <img
                src={pokemon.imageGif ? pokemon.imageGif : Load}
                alt=""
                className="poke-image"
                onClick={ToggleClassCard}
            />
            <img src={Pokedex} alt="pokedex" className="pokedex" />
            <h1 className="poke-name" onClick={ToggleClassCard}>
                <span>{pokemon.id ? pokemon.id : ""} - </span>
                {pokemon.name ? pokemon.name : "Loading.."}
            </h1>
            <div className="buttons">
                <Button action="< Prev" NumberLessOrPlus={NumberLessOrPlus} />
                <Button action="Next >" NumberLessOrPlus={NumberLessOrPlus} />
            </div>
            <CardInfo
                pokemon={pokemon}
                classCard={classCard}
                ToggleClassCard={ToggleClassCard}
            />
        </div>
    );
}

export default App;
