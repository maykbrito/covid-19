import useStats from "../utils/useStats"

export default function Stats({url}) {
    const stats = useStats(url)

    if (!stats) return <p>Loading...</p>

    console.log(stats)

    return (
        <section className="stats">
            <div className="stats__block">
                <h3>Confirmed</h3>
                <p>{stats.confirmed.value}</p>
            </div>
            <div className="stats__block">
                <h3>Recovered</h3>
                <p>{stats.recovered.value}</p>
            </div>
            <div className="stats__block">
                <h3>Deaths</h3>
                <p>{stats.deaths.value}</p>
            </div>
        </section>
    )
}