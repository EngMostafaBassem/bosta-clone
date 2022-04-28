import React, { useContext, useState } from 'react'
import Card from '../../../../UI/Molecules/Card'
import styles from './index.module.scss'
import { CompassOutlined,DollarCircleOutlined,CommentOutlined   } from '@ant-design/icons';
import Head from '../../../../UI/Atoms/Head';
import Button from '../../../../UI/Atoms/Button';
import { useTranslation } from 'react-i18next';
const Tasks=()=>{
    const [choice,setChoice]=useState("choice1")
    const handleChoice=(choice:string)=>setChoice(choice)
    const { t } = useTranslation();
    return(
        <div className={styles['bosta_tasks']}>
          <Head title={t('whyBosta')}/>
          <div className={styles['bosta_tasks-wrapper']}>
             <div className={styles['bosta_tasks-wrapper-cards']}>
             <Card 
               onClick={()=>handleChoice('choice1')}
               Icon={()=><CompassOutlined style={{color:'red',fontSize:'1rem'}}/>}
               title={t('trackOrders')} 
               body={t('trackOrdersDesc')}/>

              <Card 
               onClick={()=>handleChoice('choice2')}
               Icon={()=><DollarCircleOutlined style={{color:'red',fontSize:'1rem'}}/>}
               title={t('manageCod')} 
               body={t('manageCodDesc')}/>

              <Card 
               onClick={()=>handleChoice('choice3')}
               Icon={()=><CommentOutlined style={{color:'red',fontSize:'1rem'}}/>}
               title={t('ecommerceShop')} 
               body={t('ecommerceShopDesc')}/>

               <Button title={t('contactSales')}/>
             </div>

             <div className={styles['bosta_tasks-wrapper-images']}>
                 { choice==="choice1"&&<img src='https://bosta.co/wp-content/uploads/2019/08/Track-Shipments.png' alt='Task image'/>}            
                 { choice==="choice2"&&<img src='https://bosta.co/wp-content/uploads/2019/08/COD-Management.png' alt='Task image'/>}
                 { choice==="choice3"&&<img src='https://bosta.co/wp-content/uploads/2019/08/plugins.png' alt='Task image'/>}          
               
             </div>
          </div>
        </div>
    )
}
export default  Tasks