import ServiceBanner from '@/app/components/service/ServiceBanner'
import React from 'react'

import NavigationCard from '@/app/components/service/NavigationCard';
import ServiceBreadcrumbNav from '@/app/components/service/ServiceBreadcrumb';

const Niche = () => {
  return (
    <div className='flex '>
      <div className='flex w-4/5'>
      <ServiceBanner serviceId='34'/>
      <ServiceBreadcrumbNav/>
      </div>
      <div className='flex-w-1/5'>
      <NavigationCard/>
      </div>
  

    </div>
  )
}

export default Niche