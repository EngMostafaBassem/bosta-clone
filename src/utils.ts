export const parseDateTime=(date:Date|string,locale:string)=>new Date(date).toLocaleDateString(locale==='ar'?'ar-EG':'en-US')+' - '+new Date(date).toLocaleTimeString(locale==='ar'?'ar-EG':'en-US')
export const parseDate=(date:Date|string,locale:string)=>new Date(date).toLocaleDateString(locale==='ar'?'ar-EG':'en-US')
export const parseTime=(date:Date|string,locale:string)=>new Date(date).toLocaleTimeString(locale==='ar'?'ar-EG':'en-US')
export const shipmentStatus:any={
    TICKET_CREATED:{
        ar:'تم انشاء الشحنة',
        en:'Ticket Created'
    },
    IN_TRANSIT:{
        ar:'تم استلام الشحنة من التاجر',
        en:'IN_TRANSIT'
    },
    OUT_FOR_DELIVERY:{
        ar:'الشحنة خرجت للتسليم',
        en:'Out For Delivery'
    },
    DELIVERED:{
        ar:'تم التسليم',
        en:'Delivered'
    },
    NOT_YET_SHIPPED:{
        ar:'لم يتم الشحن بعد ',
        en:'Not Yet Shipped'
    },
    RECEIVED_DELIVERY_LOCATION:{
        ar:'تم استلام موقع التسليم',
        en:'Received Delivery Location'
    },
    PACKAGE_RECEIVED:{
        ar:'تم استلام الطرد',
        en:'Pacakge Received'
    },
    WAITING_FOR_CUSTOMER_ACTION:{
        ar:'في انتظار تصرف العميل',
        en:'Waiting For Customer Action '
    },
    DELIVERED_TO_SENDER:{
        ar:'سلمت للمرسل',
        en:'Delivered To Sender'
    }


}