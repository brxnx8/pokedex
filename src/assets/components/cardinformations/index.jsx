import { Stats } from "../stats";
import style from "./cardinformations.module.css";

export function CardInfo({ pokemon, classCard, ToggleClassCard }) {
    const types = [];

    for (let obj in pokemon.types) {
        types.push(pokemon.types[obj]["type"]["name"]);
    }

    return (
        <section className={classCard} onClick={ToggleClassCard}>
            <div className={style.card}>
                <div className={style.divColorCard}>
                    <img src={pokemon.image3D} alt="" />
                </div>
                <div className={style.pokemonInfo}>
                    <h1>{pokemon.name}</h1>
                    <section className={style.pokemonType}>
                        {types.map((type) => (
                            <div key={type}>{type}</div>
                        ))}
                    </section>
                    <section className={style.pokemonMeasure}>
                        <div>{pokemon.weight / 10 + "kg"}</div>
                        <div>{pokemon.height / 10 + "m"}</div>
                    </section>
                    <Stats pokemon={pokemon} />
                </div>
            </div>
        </section>
    );
}
