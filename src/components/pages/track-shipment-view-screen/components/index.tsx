import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import ShipmentStatus from './Shipment-Status';
import ShipmentInfo from './Shipment-Info';
import ShipmentAddress from './Shipment-Address';
import styles from './index.module.scss'
import {useDispatch,useSelector} from 'react-redux'
import {shipmentDetailsRequest} from '../../../../store/redux/shipment/action'
import {useParams} from 'react-router-dom'
const TrackShipment=()=>{
    const dispatch=useDispatch()
    const params=useParams()
    const shipmentState=useSelector((store:any)=>store.shipmentReducer)  
    useEffect(()=>{
        if(params?.trackNum)dispatch(shipmentDetailsRequest(+params.trackNum))    
    },[params?.trackNum])
    return(
      <div className={styles['container']}>
           <Row >
             <Col span={24}><ShipmentStatus shipment={shipmentState.data}/></Col>
           </Row>
           <Row gutter={16}>  
             <Col span={16} lg={16} md={16} sm={24} xs={24}><ShipmentInfo shipment={shipmentState.data}/></Col>
             <Col span={8} lg={8} md={8}  sm={24} xs={24}><ShipmentAddress/></Col>
           </Row>
      </div>
    )

}
export default TrackShipment