import React, { useContext } from 'react'
import styles from './index.module.scss'
import {FacebookOutlined,TwitterOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import LocalContext from '../../../../context/LocalContext';
 
const Footer=()=>{
    const logo={
        ar:'https://bosta.co/wp-content/uploads/2019/08/bosta_logo_ar_red.svg',
        en:'https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_white.svg'
    }
    const { locale } = useContext(LocalContext);
    const { t } = useTranslation();
    return(
        <div className={styles['bosta_footer']} dir={locale=='en'?'ltr':'rtl'}>
           <div className={styles['bosta_footer-container']}>
              <div className={styles['bosta_footer-container-info']}>
                 <div className={styles['bosta_footer-container-info-logo']}>
                    <img src={locale=='en'?logo.en:logo.ar} alt='bosta logo'/>
                 </div>
                 <p className={styles['bosta_footer-container-info-email']}>help@bosta.co</p>
                 <div className={styles['bosta_footer-container-info-social']}>
                      <FacebookOutlined style={{color:'white',fontSize:'3rem',cursor:'pointer'}}/>
                      <TwitterOutlined style={{color:'white',fontSize:'3rem',cursor:'pointer'}} />
                 </div>
              </div>
              <div className={styles['bosta_footer-container-links']}>
                <p className={styles['bosta_footer-container-links-title']}>{t('shipments')}</p>
                <a  className={styles['bosta_footer-container-links-item']} href='#'>{t('ourPricing')}</a>
                <a  className={styles['bosta_footer-container-links-item']} href='#'>{t('trackingShipment')}</a>
              </div>
           </div>
           <div className={styles['bosta_footer-copyright']}>
              <p className={styles['bosta_footer-copyright-text']}>Copyright ©2019 bosta.co</p>
           </div>
        </div>
    )

}
export default Footer