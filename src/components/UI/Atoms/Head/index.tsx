import React from 'react'
import styles from './index.module.scss'
interface HeadProps{
    title:string
}
const Head:React.FC<HeadProps>=({title})=>{
    return(
        <h1 className={styles['head']}>{title}</h1>
    )

}
export default Head