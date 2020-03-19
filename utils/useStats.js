import { useState, useEffect } from "react"

export default function useStats(url) {
    const [ stats, setStats ] = useState()

    useEffect(() => {
        async function fetchData() {
            let data = await fetch(url)
            .then(res => res.json())
            
            setStats(data)
        }

        fetchData()
    }, [])

    return stats
}