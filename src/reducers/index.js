import toggle from './toggle'
import {combineReducers} from 'redux'
import country from './country'

const allReducers = combineReducers({
    toggler: toggle,
    countryID: country
})

export default allReducers
