import React from 'react'
import styles from './index.module.scss'
interface ButtonProps{
    title:string
}
const Button:React.FC<ButtonProps>=({title})=>{
    return(
        <button className={styles['btn']}>{title}</button>
    )

}
export default Button