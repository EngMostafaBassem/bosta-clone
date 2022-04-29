import axios from 'axios'
const get=(trackingNumber:number)=>{
  return axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
}
export default{
    get
}
