import toggle from './toggle'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    toggler: toggle,
})

export default allReducers
