import style from "./stats.module.css";

export function Stats({ pokemon }) {
    const stats = [];

    for (let obj in pokemon.stats) {
        stats.push(pokemon.stats[obj]);
    }

    return (
        <section className={style.statsConteiner}>
            <h2>Base Stats</h2>
            <section className={style.statsInfomations}>
                <div className={style.statsNames}>
                    {stats.map((stat) => {
                        return <p key={stat.stat.name}>{stat.stat.name}</p>;
                    })}
                </div>
                <div className={style.statsValues}>
                    {stats.map((stat) => {
                        return (
                            <div key={stat.stat.url}>
                                <p>{stat.base_stat}</p>
                                <input
                                    type="range"
                                    name=""
                                    id=""
                                    defaultValue={stat.base_stat}
                                    disabled
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}
