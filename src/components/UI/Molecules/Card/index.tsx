import React, { useContext } from 'react'
import LocalContext from '../../../../context/LocalContext';
import styles from './index.module.scss'

interface CardProps{
    title:string;
    body:string;
    Icon?:any,
    onClick:()=>void

}
const Card:React.FC<CardProps>=({title,body,Icon,onClick})=>{
    const { locale } = useContext(LocalContext);
    return(
        <div className={styles['card']} onClick={onClick} dir={locale==='en'?'ltr':'rtl'}>
            <div className={styles['card_title']}>
              {Icon&& <div  className={styles['card_title-ico']}><Icon/></div>}
              <a  className={styles['card_title-text']} href="#">{title}</a>
            </div>
            <p  className={styles['card_body']}>{body}</p>
        </div>
    )

}
export default Card