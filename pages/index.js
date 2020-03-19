import useStats from "../utils/useStats"

export default function IndexPage() {
    const stats = useStats("https://covid19.mathdro.id/api/countries/BR")

    if (!stats) return <p>Loading...</p>

    console.log(stats)

    return <h1>Great!</h1>
}