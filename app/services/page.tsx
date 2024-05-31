

import React from 'react'
import ServiceIntro from '../components/service/ServiceIntro'
import ServiceList from '../components/service/ServiceList'
import ServiceBanner from '../components/service/ServiceBanner'

const Services = () => {
  return (
    <div>
      <ServiceBanner serviceId="123"/>
      <ServiceIntro/>
      
      <ServiceList/>
     
    </div>
  )
}

export default Services