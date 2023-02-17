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
                {stats.map((stat) => {
                    return (
                        <div key={stat.stat.url} className={style.statsNames}>
                            <p>{stat.stat.name}</p>
                            <div className={style.statsValues}>
                                <p>{stat.base_stat}</p>
                                <div className={style.input}>
                                    <div
                                        style={{
                                            width: `${stat.base_stat}px`,
                                            height: "100%",
                                            backgroundColor: "#fff",
                                            border: "none",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </section>
    );
}
