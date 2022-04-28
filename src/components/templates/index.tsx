import React from 'react'
import Footer from '../UI/Organisms/Footer'
import Header from '../UI/Organisms/Header'
const Content:React.FC<any>=({children})=>{
    return(
         <>
         <Header/>
           {children}
         <Footer/>
         </>
    )
}
export default Content