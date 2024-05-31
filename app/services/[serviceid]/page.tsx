import PageIntro from '@/app/components/PageIntro';
import React from 'react'

const ServiceType = () => {
  return (
    <div className='flex '>
      <div className='w-3/5'>
      <PageIntro eyebrow="Our Services" title="Our Services are for you">
        <p>Service Listing</p>
      </PageIntro>

      </div>
      <div className ="w-2/5"></div>
    </div>
  )
}

export default ServiceType;