import Stats from  "../components/Stats"
import CountrySelector from  "../components/CountrySelector"

export default function IndexPage() {
    return <>
        <Stats url="https://covid19.mathdro.id/api/countries/BR"></Stats>
        <CountrySelector></CountrySelector>
    </>
}