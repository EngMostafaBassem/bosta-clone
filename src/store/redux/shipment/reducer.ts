import Shipment from "../../../types-dictionary/shipment"
import actionTypes from "./action-types"

interface ShipmentReducerTypes{
    data:Shipment|{},
    isLoading:boolean,
    isError:boolean
}

const INTIAL_STATE:ShipmentReducerTypes={
    data:{},
    isLoading:false,
    isError:false
}

export const shipmentReducer=(state=INTIAL_STATE,action:any)=>{
    switch(action.type){
        case actionTypes.SHIPMENT_DETAILS_REQUEST:
            return {...state,isLoading:true}
        case actionTypes.SHIPMENT_DETAILS_REQUEST_SUCCESS:
            return {...state,data:action.payload,isLoading:false}    
        case actionTypes.SHIPMENT_DETAILS_REQUEST_ERROR:
            return {...state, isError:true,isLoading:false}    
        default:
            return state    
    }

}
