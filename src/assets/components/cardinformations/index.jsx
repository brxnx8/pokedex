import { DivColored } from "../divColors/div.styles";
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
                <DivColored 
                    color={types[0]} 
                    className={style.divColorCard}
                >
                    <img src={pokemon.imageCard} alt="" />
                </DivColored>
                <div className={style.pokemonInfo}>
                    <h1 className={style.typingAnimation}>{pokemon.name}</h1>
                    <section className={`${style.pokemonType} ${style.opacity}`}>
                        {types.map((type) => (
                            <DivColored
                                key={type}
                                className={style.type}
                                color={type}
                            >
                                {type}
                            </DivColored>
                        ))}
                    </section>
                    <section className={`${style.pokemonMeasure} ${style.opacity}`}>
                        <div>{`${pokemon.weight / 10}kg`}</div>
                        <div>{`${pokemon.height / 10}m`}</div>
                    </section>
                    <Stats pokemon={pokemon} />
                </div>
            </div>
        </section>
    );
}
