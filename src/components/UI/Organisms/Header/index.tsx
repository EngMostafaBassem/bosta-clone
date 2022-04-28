import React, { useContext, useState } from 'react'
import styles from './index.module.scss'
import { Menu, Dropdown, Space,Input  } from 'antd';
import { DownOutlined, SmileOutlined ,SearchOutlined,MenuOutlined  } from '@ant-design/icons';
import LocalContext from '../../../../context/LocalContext';
import i18n from '../../../../i18n';
import { useTranslation } from 'react-i18next';

const Header=()=>{  
   const[visible,setVisible]=useState(false)
   const [menuView,setMenuView]=useState(false)
   const logo={
       ar:'https://bosta.co/wp-content/uploads/2019/08/Component.svg',
       en:'https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg'
   }
   const { locale } = useContext(LocalContext);
   const { t } = useTranslation();
   const  changeLocale= (l:string)=>{
    if (locale !== l) {
        i18n.changeLanguage(l);
      }
  }

    return(
        <div className={styles['bosta_header']} dir={locale==='en'?'ltr':'rtl'}>      
            <div className={styles['bosta_header-logo']}>
                <img src={locale=='en'?logo.en:logo.ar} alt='logo for bosta'/>
            </div>
            <ul className={styles['bosta_header-list']} > 
             <li className={styles['bosta_header-list-item']}><a  href='#home'>{t('home')}</a></li>
             <li className={styles['bosta_header-list-item']}><a  href='#pricing'>{t('pricing')}</a></li>
             <li className={styles['bosta_header-list-item']}><a  href='#contact-sales'>{t('contactSales')}</a></li>
             <li className={styles['bosta_header-list-item']}><a  href='#carrer'>{t('career')}</a></li>
             <li className={styles['bosta_header-list-item']} ><a>
                 <span onClick={()=>setVisible(visible=>!visible)}>{t('trackingShipment')}</span>
              
              <DownOutlined  style={{color:'red',fontWeight:'bold'}}/> </a>
              {
               visible&&(
                <div className={styles['track-ship-container']} >
                <h2 className={styles['track-ship-title']}>{t('trackYourShipment')}</h2>
                <p className={styles['track-ship-subtitle']}>{t('enterYourTrackingNumber')}</p>
                <div className={styles['form-control']}>
                  <Input  className={styles['form-control-input']} placeholder={t('trackingNumber')} />
                   <div className={styles['form-control-btn']}><SearchOutlined style={{color:'white',fontWeight:'bold'}} /></div>
                </div>
              </div>
               )
           }
             </li>        
             <li className={styles['bosta_header-list-item']}><a  href='#signIn'>{t('signIn')}</a></li>
             <li className={styles['bosta_header-list-item']}><a  href='#' style={{color:'red'}} onClick={()=>changeLocale(locale=='ar'?'en':'ar')}>{locale=='en'?'عربي':'English'}</a></li>
            </ul>
        
           <MenuOutlined className= {styles['mobile-menu']} onClick={()=>setMenuView(menuView=>!menuView)}/>
           {
               menuView&&(
                <div className={styles['mobile-view-menu']}>
                <ul className={styles['mobile-view-menu-list']} > 
                  <li className={styles['mobile-view-menu-list-item']}><a  href='#home'>{t('home')}</a></li>
                  <li className={styles['mobile-view-menu-list-item']}><a  href='#pricing'>{t('pricing')}</a></li>
                  <li className={styles['mobile-view-menu-list-item']}><a  href='#contact-sales'>{t('contactSales')}</a></li>
                  <li className={styles['mobile-view-menu-list-item']}><a  href='#carrer'>{t('career')}</a></li>
                  <li className={styles['mobile-view-menu-list-item']}>
                      <div className={styles['form-control-mobile-view']}>
                       <Input  className={styles['form-control-input-mobile-view']} placeholder={t('trackingShipment')} />
                        <div className={styles['form-control-btn-mobile-view']}><SearchOutlined style={{color:'white',fontWeight:'bold'}} /></div>
                     </div>
                 </li>        
                  <li className={styles['mobile-view-menu-list-item']}><a  href='#signIn'>{t('signIn')}</a></li>
                 </ul>
                </div>
               )
           }
         
          
           
           
        </div>
    )

}
export default Header

