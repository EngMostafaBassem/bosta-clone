import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import LocalContext from '../../../../../context/LocalContext';
import Button from '../../../../UI/Atoms/Button'
import styles from './index.module.scss'
const Coverage=()=>{
    const { t } = useTranslation();
    const { locale } = useContext(LocalContext);
    return(
        <div className={styles['bosta_coverage']} dir={locale==='en'?'ltr':'rtl'}>
            <div className={styles['bosta_coverage-content']}>
              <p className={styles['bosta_coverage-content-title']}>{t('weCoverEgypt')}</p>
              <p className={styles['bosta_coverage-content-subtitle']}>{t('locateNearestCity')}</p>
             <Button title={t('shipWithBosta')}/>
            </div>
            <div className={styles['bosta_coverage-img']}>
               <img src='http://bosta.co/wp-content/uploads/2019/08/Bosta-map-1-1.svg' alt='egypt map'/>
            </div>
            
        </div>
    )

}
export default Coverage