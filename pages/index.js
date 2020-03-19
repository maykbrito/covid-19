import useStats from "../utils/useStats"

export default function IndexPage() {
    const stats = useStats()

    if (!stats) return <p>Loading...</p>

    console.log(stats)

    return <h1>Great!</h1>
}