import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Steps } from 'antd';
import { FireOutlined,CarOutlined,FileDoneOutlined,ShopOutlined} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Step } = Steps;
const ShipmentStatus=()=>{
    const [step,setStep]=useState<Number>(1)
    const { t } = useTranslation();
    return(
        <div className={styles['bosta_shipmentStatus']}>
            <div className={styles['bosta_shipmentStatus-info']}>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('trackingNumber')} <span>65111111</span></p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>--</p>
               </div>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('lastUpdate')}</p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>--</p>
               </div>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('merchantName')}</p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>--</p>
               </div>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('promisedData')}</p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>--</p>
               </div>
            </div>
            <div className={styles['bosta_shipmentStatus-stepper']}>
             <Steps current={step as number} >
                 <Step  title={t('shipmentCreated')} />
                 <Step  title={t('shipmentReceivedFromMerchant')}   />
                 <Step  title={t('shipmentOutForDeleivery')} />
                 <Step  title={t('shipmentDeliverd')} />
            </Steps>
            </div>
         
        </div>
    )

}
export default ShipmentStatus