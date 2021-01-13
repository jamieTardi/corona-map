import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'

const CountryChart = ({ countryChartData, setCountryData }) => {


    return (
        <div onClick={() => {setCountryData(true)}} style={{height: "300px", width: '420px', cursor: "pointer"}}>
           <Line data={countryChartData} options={{
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
    )
}

export default CountryChart
