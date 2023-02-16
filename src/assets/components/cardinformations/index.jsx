import style from "./cardinformations.module.css";

export function CardInfo({pokemon}) {
    const types = [];
    
    for(let obj in pokemon.types){
        
       types.push(pokemon.types[obj]['type']['name'])
    }

    return (
        <section className={style.background}>
            <div className={style.card}>
                <div className={style.divColorCard}>
                    <img src={pokemon.image3D} alt="" />
                </div>
                <div className={style.pokemoninInfo}>
                    <h1>{pokemon.name}</h1>
                    <section>
                        {types.map(
                            type => <div key={type}>{type}</div>
                        )}
                    </section>
                    <section className={style.pokemonMeasure}>
                        <div>{pokemon.weight}</div>
                        <div>{pokemon.height}</div>
                    </section>
                </div>
            </div>
        </section>
    );
}
