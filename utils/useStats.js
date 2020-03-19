import { useState, useEffect } from "react"

export default function useStats() {
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