import React, {useState} from 'react'
import Map from '../components/Map'
import WorldDataOverlay from '../components/WorldDataOverlay'
import TitleBar from '../components/TitleBar'
import CountryDataOverlay from '../components/CountryDataOverlay'
import axios from 'axios'

const MapSection = () => {
const [toggleWorldData, setToggleWorldData] = useState(false)
const [worldData,
    setWorldData] = useState(null)
    const [countryId, setCountryId] = useState("gb")
    const [countryData, setCountryData] = useState(false)
    const [countryCharts1, setCountryCharts1] = useState({})
    const [countryCharts2, setCountryCharts2] = useState({})
    const [countryCharts3, setCountryCharts3] = useState({})
    const [countryCharts4, setCountryCharts4] = useState({})
    const [countryBoxInfo, setCountryBoxInfo] = useState(null)
    const addCountryOverlay = () => {
        setCountryData(true)
        chart1()
        chart2()
        chart3()
        chart4()
        smallBoxInfo()
    }
    console.log(countryId)
    const chart1 = () => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${countryId}?strict=true`)
        .then(response => {
            let cases = response.data.cases
        let recovered = response.data.recovered;
       
        
        setCountryCharts1({
                labels: ['Total Cases', 'Total Recovered'],
                datasets: [
                    {
                        label: 'World data for recovered and cases',
                        data: [cases, recovered],
                        backgroundColor: ['#F71B14', '#00D261'],
                        borderWidth: 4,
                    }
                ]
               
            })
        })
        .catch(err => console.log(err))
    }
    
    //Second Main Chart
    const chart2 = () => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${countryId}?strict=true`)
        .then(response => {
            let todaysCases = response.data.todayCases
            let todaysDeaths = response.data.todayDeaths
        
        
            setCountryCharts2({
                labels: ['Todays Cases', 'Todays Deaths'],
                datasets: [
                    {
                        label: 'World data for recovered and cases',
                        data: [todaysCases, todaysDeaths],
                        backgroundColor: ['#FFE135', '#000000'],
                        borderWidth: 4,
                    }
                ]
               
            })
        })
        .catch(err => console.log(err))
    }
    
     //Third Main Chart
     const chart3 = () => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${countryId}?strict=true`)
        .then(response => {
           let casesPerOneMillion = response.data.casesPerOneMillion
            let deathsPerMillion = response.data.deathsPerOneMillion
        
        
            setCountryCharts3({
                labels: ['Todays Cases', 'Todays Deaths'],
                datasets: [
                    {
                        label: 'World data per million',
                        data: [casesPerOneMillion, deathsPerMillion],
                        backgroundColor: ['#1484D7', '#000000'],
                        borderWidth: 4,
                    }
                ]
               
            })
        })
        .catch(err => console.log(err))
    }
    
     //Third Main Chart
     const chart4 = () => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${countryId}?strict=true`)
        .then(response => {
           console.log(response)
           let todayRecovered = response.data.todayRecovered
           let todayCases = response.data.todayCases
           setCountryCharts4({
                labels: ['Todays Recovered', 'Todays Cases'],
                datasets: [
                    {
                        label: 'World data per million',
                        data: [todayRecovered, todayCases],
                        backgroundColor: ['#00D261', '#F00800'],
                        borderWidth: 4,
                    }
                ]
               
            })
        })
        .catch(err => console.log(err))
    }
    
    const smallBoxInfo = () => {
        axios.get(`https://disease.sh/v3/covid-19/countries/${countryId}?strict=true`)
        .then(response => setCountryBoxInfo(response.data))
        .catch(err => console.log(err))
    }


    return (
        <div>
            <TitleBar/>
            <Map countryId={countryId} setCountryId={setCountryId} setToggleWorldData={setToggleWorldData} worldData={worldData} setWorldData={setWorldData} setCountryData={setCountryData}
            CountryChart1={chart1} CountryChart2={chart2} CountryChart3={chart3} CountryChart4={chart4} smallCountryBoxInfo={smallBoxInfo} />
            <WorldDataOverlay toggleWorldData={toggleWorldData} setToggleWorldData={setToggleWorldData} worldData={worldData}/>
            <CountryDataOverlay countryId={countryId} countryData={countryData} 
            setCountryData={setCountryData} countryCharts1={countryCharts1} countryCharts2={countryCharts1} countryCharts3={countryCharts3} countryCharts4={countryCharts4} 
            smallCountryBoxInfo={smallBoxInfo}
            />
        </div>
    )
}

export default MapSection
