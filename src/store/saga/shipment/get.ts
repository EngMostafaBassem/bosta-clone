import {takeLatest,call, put} from 'redux-saga/effects'
import actionTypes from '../../redux/shipment/action-types'
import shipmentApi from '../../../services/shipment'
import {shipmentDetailsRequestSuccess,shipmentDetailsRequestError} from '../../redux/shipment/action'
import Shipment from '../../../types-dictionary/shipment'
function*getShipmentDetails(action:any):any{
    const {trackingNumber}=action.payload
    try{
         const response=yield call(shipmentApi.get,trackingNumber)
         yield put(shipmentDetailsRequestSuccess(response.data as Shipment))
          
    }catch(err:unknown){
     //here will handle the error
     if (err instanceof Error) {
        yield put(shipmentDetailsRequestError(err.message))       
      }     
    }  

}

export default function*watchShipmentDetails(){
    yield takeLatest(actionTypes.SHIPMENT_DETAILS_REQUEST, getShipmentDetails)
}