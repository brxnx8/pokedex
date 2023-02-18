import { useEffect, useState } from "react";
import { Button } from "./assets/components/button";
import Pokedex from "./assets/images/pokedex.png";
import Load from "./assets/images/load.gif";
import NotFound from "./assets/images/notFound.png";
import { CardInfo } from "./assets/components/cardinformations";

function App() {
    const [number, setNumber] = useState(1);

    const [pokemon, setPokemon] = useState({});

    const [classCard, setClassCard] = useState("backgroundNone");

    const [valueSearch, setValueSearch] = useState("");

    const loadPokemon = (number) => {
        const data = fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then((response) => response.json())
            .then((pokemonData) => {
                setPokemon({
                    id: pokemonData.id,
                    name: pokemonData.name,
                    imageGif:
                        pokemonData["sprites"]["versions"]["generation-v"][
                            "black-white"
                        ]["animated"]["front_default"],
                    imageDefault: pokemonData["sprites"]["front_default"],
                    imageCard:
                        pokemonData["sprites"]["other"]["official-artwork"][
                            "front_default"
                        ],
                    stats: pokemonData.stats,
                    types: pokemonData.types,
                    weight: pokemonData.weight,
                    height: pokemonData.height,
                });
            })
            .catch((erro) => {
                console.clear();
                setPokemon({
                    id: isNaN(number) ? "" : parseInt(number),
                    name: "Not Found",
                    imageGif: NotFound,
                });
            });
    };
    useEffect(() => {
        setPokemon({
            id: number,
        });
        setTimeout(() => {
            loadPokemon(number);
        }, 700);
    }, [number]);

    function NumberLessOrPlus(bool) {
        if (bool) {
            setNumber(() => {
                return pokemon.id + 1;
            });
        } else {
            setNumber(() => {
                return pokemon.id > 1 ? pokemon.id - 1 : pokemon.id;
            });
        }
        setValueSearch("");
    }

    function ToggleClassCard(event) {
        if (
            pokemon.imageCard &&
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
    function ChangeValue(event) {
        setValueSearch(event.target.value);
        if (event.target.value === "" && pokemon.imageGif === NotFound) {
            setNumber(1);
        }
    }
    function ChangeNumber(event) {
        event.preventDefault();
        if (event.target["search"].value != "") {
            setNumber(event.target["search"].value);
        }
        if (parseInt(event.target["search"].value) < 1) {
            setNumber(1);
        }
    }

    return (
        <div className="main">
            <img
                src={
                    pokemon.imageGif
                        ? pokemon.imageGif
                        : pokemon.imageDefault
                        ? pokemon.imageDefault
                        : pokemon.imageCard
                        ? pokemon.imageCard
                        : Load
                }
                alt=""
                className="poke-image"
                onClick={ToggleClassCard}
            />
            <img src={Pokedex} alt="pokedex" className="pokedex" />
            <h1 className="poke-name" onClick={ToggleClassCard}>
                <span>
                    {isNaN(pokemon.id) || !pokemon.name ? "" : pokemon.id} -{" "}
                </span>
                {pokemon.name ? pokemon.name : "Loading..."}
            </h1>
            <form onSubmit={ChangeNumber}>
                <input
                    type="search"
                    className="searchPokemon"
                    placeholder="Name or Number..."
                    onChange={ChangeValue}
                    value={valueSearch}
                    name="search"
                />
                <button className="ButtonSearchPokemon">Search</button>
            </form>
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
