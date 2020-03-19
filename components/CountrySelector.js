import { useState } from "react"

import useStats from "../utils/useStats"

export default function CountrySelector() {
    const countries = useStats("https://covid19.mathdro.id/api/countries")
    const [ selectedCountry, setSelectedCountry ] = useState("BR");

    if (!countries) return <p>Loading...</p>

    console.log(countries)


    const options = Object.entries(countries.countries).map(([country, code], key) => (
        <option key={key} value={countries.iso3[code]}>
            {country}
        </option>
    ))

    return (
        <section className="country-selector">
            <select onChange={e => {
              setSelectedCountry(e.target.value)
            }}>
                {options}
            </select>
        </section>
    )
}