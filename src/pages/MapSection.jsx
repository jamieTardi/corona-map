import React, {useState} from 'react'
import Map from '../components/Map'
import WorldData from '../components/WorldData'
import WorldDataOverlay from '../components/WorldDataOverlay'
import TitleBar from '../components/TitleBar'
import CountryChart from '../components/CountryChart'

const MapSection = () => {
const [toggleWorldData, setToggleWorldData] = useState(false)
const [worldData,
    setWorldData] = useState(null)
    const [countryId, setCountryId] = useState("gb")


    return (
        <div>
            <TitleBar/>
            <Map countryId={countryId} setCountryId={setCountryId} setToggleWorldData={setToggleWorldData} worldData={worldData} setWorldData={setWorldData}/>
            <WorldDataOverlay toggleWorldData={toggleWorldData} setToggleWorldData={setToggleWorldData} worldData={worldData}/>
           
        </div>
    )
}

export default MapSection
