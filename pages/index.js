import { useState, useEffect } from "react"

function useStats() {
    const [ stats, setStats ] = useState()

    useEffect(() => {
        async function fetchData() {
            let data = await fetch("https://covid19.mathdro.id/api/countries/BR")
            .then(res => res.json())
            
            setStats(data)
        }

        fetchData()
    }, [])

    return stats
}

export default function IndexPage() {
    const stats = useStats()

    if (!stats) return <p>Loading...</p>

    console.log(stats)

    return <h1>Great!</h1>
}