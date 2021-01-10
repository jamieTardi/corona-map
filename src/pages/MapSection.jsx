import React from 'react'
import {toggle} from '../actions/toggle'
import {useDispatch} from 'react-redux'
import Map from '../components/Map'
import WorldData from '../components/WorldData'

const MapSection = () => {
const dispatch = useDispatch()

    return (
        <div>
            <Map/>
            <button onClick={() => dispatch(toggle())}>Click me!</button>
            <WorldData />
        </div>
    )
}

export default MapSection
