import {combineReducers} from 'redux'
import { shipmentReducer } from './shipment/reducer'
const rootReducer=combineReducers({
    shipmentReducer:shipmentReducer
})

export default rootReducer