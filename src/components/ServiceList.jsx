import React from 'react'
import { useSelector } from 'react-redux'
import ServiceItem from './ServiceItem';


export default function ServiceList() {
    const { serviceList } = useSelector((state) => state.reducer);
   
    return (
        <ul className='list-group list-group-flush mt-3'>
            {
                serviceList.map((service, index) => <ServiceItem key={index} {...service} />)
            }
        </ul>
    )
}
