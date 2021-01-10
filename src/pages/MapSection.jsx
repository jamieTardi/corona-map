import React from 'react'
import {toggle} from '../actions/toggle'
import {useSelector, useDispatch} from 'react-redux'
import Map from '../components/Map'

const MapSection = () => {
const dispatch = useDispatch()

    return (
        <div>
            <Map/>
            <button onClick={() => dispatch(toggle())}>Click me</button>
        </div>
    )
}

export default MapSection
