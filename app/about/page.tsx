import React from 'react'
import HeaderTitle from '../components/about/HeaderTitle'
import AboutBanner from '../components/about/AboutBanner'
import OurClient from '../components/about/OurClient'
import OurDelivery from '../components/about/OurDelivery'
import ValuesTitle from '../components/about/ValuesTitle'
import GetStartedCTO from '../components/about/GetStartedCTO'
import CoreValue from '../components/about/CoreValues'


const About = () => {
  return (
    <div className='relative mt-0'>
      <AboutBanner />
      <HeaderTitle/>
      <OurClient/>
      <OurDelivery/>
      <ValuesTitle/>
      <CoreValue/>
      <GetStartedCTO/>
    </div>
    
  )
}

export default About