import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'antd';
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
import Shipment from '../../../../../types-dictionary/shipment';
import {parseDate,parseTime,shipmentStatus} from '../../../../../utils'
import TransitEvents from '../../../../../types-dictionary/shipment/transit-events';
import LocalContext from '../../../../../context/LocalContext';
interface ShipmentInfoProps{
    shipment:Shipment
}

const ShipmentInfo:React.FC<ShipmentInfoProps>=({shipment})=>{
    const { t } = useTranslation()
    const [data,setData]=useState<any>([])
    const { locale } = useContext(LocalContext);
    const columns = [
        {
          title: t('branch'),
          dataIndex: 'branch',
          width: 150,
        },
        {
          title:  t('date'),
          dataIndex: 'date',
          width: 150,
        },
        {
          title: t('time'),
          dataIndex: 'time',
          width: 150,
        },
        {
          title:  t('details'),
          dataIndex: 'details',
           
          },
      ];

      useEffect(()=>{
          if(shipment.TransitEvents?.length){
             setData(shipment.TransitEvents.map((transit:TransitEvents,idx)=>({
                 key:idx,
                 branch:transit?.hub??'-',
                 date:parseDate(transit?.timestamp,locale),
                 time:parseTime(transit?.timestamp,locale),
                 details:locale==='ar'?shipmentStatus[transit?.state as string].ar:shipmentStatus[transit?.state as string].en
             })))
          }

      },[shipment.TransitEvents,locale])
    return(
        <div className={styles['bosta_shipmentInfo']}>
           <h2 className={styles['bosta_shipmentInfo-title']} >{t('shipmentDetails')}</h2> 
          <Table columns={columns} dataSource={data}  pagination={{ pageSize: 20 }}/>
        </div>
    )

}
export default ShipmentInfo