import React from 'react'
import { useSelector } from 'react-redux'
import ServiceItem from './ServiceItem';


export default function ServiceList() {
    const { serviceList, filteredList } = useSelector((state) => state.reducer);
    console.log(filteredList)

    return (
        <ul className='list-group list-group-flush mt-3'>
            {
                filteredList.length ?
                    filteredList.map((service, index) => <ServiceItem key={index} {...service} />) :
                    serviceList.map((service, index) => <ServiceItem key={index} {...service} />)
            }
        </ul>
    )
}
