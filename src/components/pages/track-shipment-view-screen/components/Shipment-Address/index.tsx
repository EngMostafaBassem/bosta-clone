import React from 'react'
import Button from '../../../../UI/Atoms/Button'
import styles from './index.module.scss'
import { ReactComponent as ProblemSvg } from '../../../../../assets/images/problem.svg';
import { useTranslation } from 'react-i18next';
const ShipmentAddress=()=>{
    const { t } = useTranslation();
    return(
        <div className={styles['bosta_shipmentAddress']}>
           <h2 className={styles['bosta_shipmentAddress-title']}>{t('addressName')}</h2>
           <p className={styles['bosta_shipmentAddress-desc']}>-</p>
           <div className={styles['bosta_shipmentAddress-problem']}>
             <ProblemSvg/>
             <div className={styles['bosta_shipmentAddress-problem-wrapper']}>
               <p className={styles['bosta_shipmentAddress-problem-wrapper-title']}> {t('IsthereProblemInYourShipment')}</p>
                 <Button title={t('reportProblem')}/>
             </div>
           </div>
        </div>
    )

}
export default ShipmentAddress