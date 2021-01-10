import React, {useEffect, useState} from 'react'
import axios from 'axios'

const WorldData = () => {
const [worldData, setWorldData] = useState(null)
    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all')
        .then((response) => setWorldData(response))
        .catch(error => console.log(error))
        }, [])
        console.log(worldData)
    return (
        
        <>
        {worldData ?
            <p>WorldData</p>
        : <p>Loading.....</p>}
        </>
        
    )
}

export default WorldData
