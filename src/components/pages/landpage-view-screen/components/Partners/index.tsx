import React from 'react'
import Head from '../../../../UI/Atoms/Head'
import styles from './index.module.scss'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useTranslation } from 'react-i18next';
const Partners=()=>{
    const { t } = useTranslation();
 return(
     <div className={styles['bosta_partners']}>
          <Head title={t('successPartners')}/>
          <p className={styles['bosta_partners-subtitle']}>{t('partnersWord')}</p>     
          <AwesomeSlider className={styles['bosta_partners-slider']}>
             <div className={styles['bosta_partners-slider-wrapper']}>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-amazon.svg' alt='partner1'/>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-fawry.svg' alt='partner2'/>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-vezeeta.png' alt='partner3'/>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-palma-300x47.png' alt='partner4'/>
             </div>
             <div className={styles['bosta_partners-slider-wrapper']}>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-yashry.png' alt='partner5'/>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-lynks.svg' alt='partner6'/>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-amazon.svg' alt='partner7'/>
                 <img src='https://bosta.co/wp-content/uploads/2019/08/partner-fawry.svg' alt='partner8'/>
             </div>
           </AwesomeSlider>
        
         
         
     </div>
 )
}
export default Partners