import React from 'react'
import styles from './index.module.scss'
import { Spin } from 'antd';
const Spinner=()=>{
    return(
        <div className={styles['container']}>
            <Spin size="large"/>
        </div>
    )

}
export default Spinner