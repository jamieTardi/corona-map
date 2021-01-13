import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Pie, Bar, Doughnut} from 'react-chartjs-2'

const WorldDataOverlay = ({toggleWorldData , setToggleWorldData}) => {
    const [worldCharts1, setWorldCharts1] = useState({})
    const [worldCharts2, setWorldCharts2] = useState({})
    const [worldCharts3, setWorldCharts3] = useState({})
    const [worldCharts4, setWorldCharts4] = useState({})
    const [boxInfo, setBoxInfo] = useState(null)
    
    //First Main Chart
    const chart1 = () => {
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => {
            let cases = response.data.cases
        let recovered = response.data.recovered;
        
        
            setWorldCharts1({
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
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => {
            let todaysCases = response.data.todayCases
            let todaysDeaths = response.data.todayDeaths
        
        
            setWorldCharts2({
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
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => {
           let casesPerOneMillion = response.data.casesPerOneMillion
            let deathsPerMillion = response.data.deathsPerOneMillion
        
        
            setWorldCharts3({
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
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => {
           console.log(response)
           let todayRecovered = response.data.todayRecovered
           let todayCases = response.data.todayCases
            setWorldCharts4({
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
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(response => setBoxInfo(response.data))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        chart1()
        chart2()
        chart3()
        chart4()
        smallBoxInfo()
    }, [])
    
    return (
        <>
        {boxInfo &&
        <div className={toggleWorldData ? "overlay-container" : "overlay-container hide"}>
           <div className="scroll-container">
               <div className="overlay-charts-container">
            <div className="chart1 overlay-charts ">
                <h4 className="charts-title">Total Cases vs Total Recovered</h4>
        <Pie data={worldCharts1} options={{
            responsive: true,
            title : 'Total Cases vs Total Recovered',
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },
                    }
                ]
            }
        }}/>
            </div>
            <div className="chart2 overlay-charts">
            <h4 className="charts-title">Todays Cases vs Todays Deaths</h4>
            <Pie data={worldCharts2} options={{
            responsive: true,
            title : 'Todays Cases vs Todays Deaths',
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },
                    }
                ]
            }
        }}/>
            </div>
            </div>
            <button className="close-btn" onClick={() => setToggleWorldData(false)} >Close Me</button>
            <div className="overlay-info-container">
            <div className="info1 overlay-info"><h3>Total Cases Worldwide:</h3>{boxInfo.cases}</div>
            <div className="info2 overlay-info"><h3>Total Deaths Worldwide:</h3>{boxInfo.deaths}</div>
            <div className="info3 overlay-info"><h3>Cases today:</h3>{boxInfo.todayCases}</div>
            <div className="info4 overlay-info"><h3>Deaths today:</h3>{boxInfo.todayDeaths}</div>
            </div>
            <div className="overlay-charts-container">
            <div className="chart3 overlay-charts">
            <Bar data={worldCharts3} options={{
            responsive: true,
            title : 'Todays Cases vs Todays Deaths',
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },
                    }
                ]
            }
        }}/>
            </div>
            <div className="chart4 overlay-charts">
            <Doughnut data={worldCharts4} options={{
            responsive: true,
            title : 'Todays Cases vs Todays Deaths',
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },
                    }
                ]
            }
        }}/>
            </div>
            </div>
            </div>
        </div>
}
        </>
    )
   
}

export default WorldDataOverlay
