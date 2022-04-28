import React from 'react'
import { useTranslation } from 'react-i18next';
import Head from '../../../../UI/Atoms/Head'
import styles from './index.module.scss'
const Benefits=()=>{
    const { t } = useTranslation();
    return(
        <div className={styles['bosta_benefits']}>
           <Head title={t('BostaProvides')}/>
           <div className={styles['bosta_benefits-wrapper']}>
              <div  className={styles['bosta_benefits-wrapper-card']}>
                  <img className={styles['bosta_benefits-wrapper-card-img']} src='https://bosta.co/wp-content/uploads/2019/08/Group-756-svg-1.svg' alt='benefit image'/>
                  <p className={styles['bosta_benefits-wrapper-card-title']}>{t('nextDayDelivery')}</p>
                  <p className={styles['bosta_benefits-wrapper-card-subtitle']}>{t('nextDayDeliveryDesc')}</p>
              </div>
              <div  className={styles['bosta_benefits-wrapper-card']}>
                  <img className={styles['bosta_benefits-wrapper-card-img']} src='https://bosta.co/wp-content/uploads/2019/08/Group-789-svg-1.svg' alt='benefit image'/>
                  <p className={styles['bosta_benefits-wrapper-card-title']}>{t('exchangeShipments')}</p>
                  <p className={styles['bosta_benefits-wrapper-card-subtitle']}>{t('exchangeShipmentsDesc')}</p>
              </div>
              <div  className={styles['bosta_benefits-wrapper-card']}>
                  <img className={styles['bosta_benefits-wrapper-card-img']} src='https://bosta.co/wp-content/uploads/2019/08/Group-805-svg-2.svg' alt='benefit image'/>
                  <p className={styles['bosta_benefits-wrapper-card-title']}>{t('customerReturns')}</p>
                  <p className={styles['bosta_benefits-wrapper-card-subtitle']}>{t('customerReturnsDesc')}</p>
              </div>
              <div  className={styles['bosta_benefits-wrapper-card']}>
                  <img className={styles['bosta_benefits-wrapper-card-img']} src='https://bosta.co/wp-content/uploads/2019/08/Group-817-svg-2.svg' alt='benefit image'/>
                  <p className={styles['bosta_benefits-wrapper-card-title']}>{t('cashCollection')}</p>
                  <p className={styles['bosta_benefits-wrapper-card-subtitle']}>{t('cashCollectionDesc')}</p>
              </div>
           </div>
        </div>
    )

}
export default Benefits