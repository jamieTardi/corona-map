import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'

const CountryChart = ({countryId, countryChartData }) => {

    return (
        <div style={{height: "300px", width: '500px', cursor: "pointer"}}>
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
