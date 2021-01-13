import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pie, Bar, Doughnut} from 'react-chartjs-2'

const CountryDataOverlay = ({ countryData, setCountryData, countryCharts1, countryCharts2,
    countryCharts3, countryCharts4, smallCountryBoxInfo}) => {
   console.log(countryCharts1)
    return (
        <>
             {smallCountryBoxInfo &&
        <div className={countryData ? "overlay-container-country" : "overlay-container-country hide"}>
           <div className="scroll-container">
               <div className="overlay-charts-container">
            <div className="chart1 overlay-charts ">
                <h4 className="charts-title">Total Cases vs Total Recovered</h4>
        <Pie data={ countryCharts1} options={{
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
            <Pie data={ countryCharts2 } options={{
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
            <button className="close-btn" onClick={() => setCountryData(false)} >Close Me</button>
            <div className="overlay-info-container">
            <div className="info1 overlay-info"><h3>Total Cases Worldwide:</h3>{smallCountryBoxInfo.cases}</div>
            <div className="info2 overlay-info"><h3>Total Deaths Worldwide:</h3>{smallCountryBoxInfo.deaths}</div>
            <div className="info3 overlay-info"><h3>Cases today:</h3>{smallCountryBoxInfo.todayCases}</div>
            <div className="info4 overlay-info"><h3>Deaths today:</h3>{smallCountryBoxInfo.todayDeaths}</div>
            </div>
            <div className="overlay-charts-container">
            <div className="chart3 overlay-charts">
            <Bar data={ countryCharts3} options={{
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
            <Doughnut data={ countryCharts4 } options={{
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

export default CountryDataOverlay
