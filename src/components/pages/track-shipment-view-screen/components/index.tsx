import React from 'react'
import { Row, Col } from 'antd';
import ShipmentStatus from './Shipment-Status';
import ShipmentInfo from './Shipment-Info';
import ShipmentAddress from './Shipment-Address';
import styles from './index.module.scss'
const TrackShipment=()=>{
    return(
      <div className={styles['container']}>
           <Row >
             <Col span={24}><ShipmentStatus/></Col>
           </Row>
           <Row gutter={16}>  
             <Col span={16} lg={16} md={16} sm={24} xs={24}><ShipmentInfo/></Col>
             <Col span={8} lg={8} md={8}  sm={24} xs={24}><ShipmentAddress/></Col>
           </Row>
      </div>
    )

}
export default TrackShipment