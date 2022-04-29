import React, { useContext, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';
import Shipment from '../../../../../types-dictionary/shipment';
import LocalContext from '../../../../../context/LocalContext';
import {parseDateTime,parseDate,shipmentStatus} from '../../../../../utils'
import { ObjectType } from 'typescript';
const { Step } = Steps;
interface ShipmentStatusProps{
    shipment:Shipment
}
const ShipmentStatus:React.FC<ShipmentStatusProps>=({shipment})=>{
    const [step,setStep]=useState<Number>(1)
    const { t } = useTranslation();
    const { locale } = useContext(LocalContext);
    useEffect(()=>{     
        if(shipment?.CurrentStatus?.state){
            switch(shipment.CurrentStatus.state){
                case 'TICKET_CREATED':
                   setStep(1);
                    break 
                 case 'IN_TRANSIT':
                     setStep(2);
                     break
                 case 'OUT_FOR_DELIVERY':
                     setStep(3)
                     break;
                 case 'DELIVERED':
                 case 'DELIVERED_TO_SENDER':
                     setStep(4)
                     break;
                 default:
                     setStep(1)            
                  
            }
        }
        
    },[shipment])

    return(
        <div className={styles['bosta_shipmentStatus']}>
            <div className={styles['bosta_shipmentStatus-info']}>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('trackingNumber')} <span>{shipment?.TrackingNumber??'-'}</span></p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>
                     {shipment?.CurrentStatus?.state?locale==='ar'?shipmentStatus[shipment.CurrentStatus.state].ar:shipmentStatus[shipment.CurrentStatus.state].en:'-'}
                  </p>
               </div>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('lastUpdate')}</p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>{(parseDateTime(shipment?.CurrentStatus?.timestamp,locale) as string)}</p>
               </div>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('merchantName')}</p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>--</p>
               </div>
               <div className={styles['bosta_shipmentStatus-info-wrapper']}>
                  <p className={styles['bosta_shipmentStatus-info-wrapper-title']}>{t('promisedData')}</p>
                  <p  className={styles['bosta_shipmentStatus-info-wrapper-subtitle']}>{(parseDate(shipment?.PromisedDate,locale) as string)}</p>
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