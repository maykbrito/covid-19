import useStats from "../utils/useStats"

export default function CountrySelector() {
    const countries = useStats("https://covid19.mathdro.id/api/countries")

    if (!countries) return <p>Loading...</p>

    console.log(countries)

    const options = Object.entries(countries.countries).map(([country, code], key) => (
        <option key={key} value={code}>
            {country}
        </option>
    ))

    return (
        <section className="country-selector">
            <select>
                {options}
            </select>
        </section>
    )
}