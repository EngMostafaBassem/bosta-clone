import React from 'react'
import { Table } from 'antd';
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
const ShipmentInfo=()=>{
    const { t } = useTranslation()
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
      const data:any[] = [];
    return(
        <div className={styles['bosta_shipmentInfo']}>
           <h2 className={styles['bosta_shipmentInfo-title']} >{t('shipmentDetails')}</h2> 
          <Table columns={columns} dataSource={data}  />
        </div>
    )

}
export default ShipmentInfo