import React, {useState} from 'react'
import Map from '../components/Map'
import WorldData from '../components/WorldData'
import WorldDataOverlay from '../components/WorldDataOverlay'

const MapSection = () => {
const [toggleWorldData, setToggleWorldData] = useState(false)
const [worldData,
    setWorldData] = useState(null)

    return (
        <div>
            <h1 className="title">An Application that looks at the Coronavirus Data</h1>
            <Map/>
            <WorldData setToggleWorldData={setToggleWorldData} worldData={worldData} setWorldData={setWorldData}/>
            <WorldDataOverlay toggleWorldData={toggleWorldData} setToggleWorldData={setToggleWorldData} worldData={worldData}/>
        </div>
    )
}

export default MapSection
