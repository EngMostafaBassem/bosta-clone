import {all}from 'redux-saga/effects'
import watchShipmentDetails from './shipment/get'
export default function*rootSaga(){
    yield(all([watchShipmentDetails()]))
}