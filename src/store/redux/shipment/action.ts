import actionTypes from './action-types'

export const shipmentDetailsRequest=(trackingNumber:number):any=>({
    type:actionTypes.SHIPMENT_DETAILS_REQUEST,
    payload:{trackingNumber}
})

export const shipmentDetailsRequestSuccess=(data:any):any=>({
    type:actionTypes.SHIPMENT_DETAILS_REQUEST_SUCCESS,
    payload:data
})

export const shipmentDetailsRequestError=(error:any):any=>({
    type:actionTypes.SHIPMENT_DETAILS_REQUEST_ERROR,
    payyload:error
})