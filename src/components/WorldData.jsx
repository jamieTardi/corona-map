import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2'

const WorldData = ({setToggleWorldData}) => {
    const [worldData,
        setWorldData] = useState(null)
    const [totalCases,
        setTotalCases] = useState(null)
    const [chartData, setChartData] = useState({})
    useEffect(() => {
        axios
            .get('https://disease.sh/v3/covid-19/all')
            .then((response) => setWorldData(response))
            .catch(error => console.log(error));

    }, [])
    
  
    

    //World Chart
   
    const chart = () => {
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => {
            
            let totalWorldCases = response.data.cases
            let worldCasesToday = response.data.todayCases
            let totalDeaths = response.data.deaths
            let deathsToday = response.data.todayDeaths
                setChartData({
                    labels: ['Total world cases', 'Total Deaths', 'Cases Today', 'Deaths Today'],
                    datasets: [
                        {
                        label: 'World data for the Coronavirus',
                        data: [totalWorldCases, totalDeaths, worldCasesToday, deathsToday ],
                        backgroundColor: ['#F71B14'],
                        borderWidth: 4
                    }
                ]
        
                })  

        })
        .catch(err => console.log(err))
        
    }

useEffect(() => {
    chart()
}, [])

    return ( 
    <> 
    {
        worldData
            ? <div onClick={() => setToggleWorldData(true)} style={{height: "500px", width: '500px'}}>
                <Line data={chartData} options={{
                    responsive: true,
                    title: 'Total cases vs Total Deaths',
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                }}/>
            </div> 
            : <p>Loading.....</p> 
    } </>
        
    )
}

export default WorldData