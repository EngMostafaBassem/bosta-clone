import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import LocalContext from '../../../../../context/LocalContext';
import Button from '../../../../UI/Atoms/Button'
import styles from './index.module.scss'

const Hero=()=>{

    const { locale } = useContext(LocalContext);
    const { t } = useTranslation();
    const clipPathStyles={
        ar:'polygon(0 0, 100% 0, 100% 76%, 0 100%)',
        en:'polygon(0 0, 100% 0, 100% 100%, 0 76%)'
    }
  
    return(
        <div className={styles['bosta_hero']} dir={locale==='en'?'ltr':'rtl'} style={{clipPath:locale==='en'?clipPathStyles.en:clipPathStyles.ar}}>
         <p className={styles['bosta_hero-title']}>{t('heroTitle')}</p>
         <p className={styles['bosta_hero-subtitle']}>{t('heroSubtitle')}</p>
         <Button title={t('shipWithBosta')}/>
        </div>
    )

}
export default Hero