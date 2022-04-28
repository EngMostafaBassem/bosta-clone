import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import LocalContext from '../../../../../context/LocalContext';
import Button from '../../../../UI/Atoms/Button'
import styles from './index.module.scss'
const Pricing=()=>{
    const { locale } = useContext(LocalContext);
    const { t } = useTranslation();
    const pricingImg={
        en:'https://bosta.co/wp-content/uploads/2020/06/30EGP.svg',
        ar:'https://bosta.co/wp-content/uploads/2020/06/30EGP-ar.svg'
    }
    return(
        <div className={styles['bosta_pricing']} dir={locale==='en'?'ltr':'rtl'}>
            <div className={styles['bosta_pricing-title']}>
                <span>{t('startingFrom')}</span>
                 <img src={locale==='ar'?pricingImg.ar:pricingImg.en} alt='price'/>
                <span>{t('inCario')}</span>
                </div>
            <p className={styles['bosta_pricing-subtitle']}>{t('pricingSubtitle')}</p>
            <p className={styles['bosta_pricing-vat']}>*{t('pricingVat')}</p>
            <Button title={t('contactSales')}/>
        </div>

    )


}
export default Pricing