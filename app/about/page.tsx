import React from 'react'
import HeaderTitle from '../components/about/HeaderTitle'
import AboutBanner from '../components/about/AboutBanner'
import OurClient from '../components/about/OurClient'
import OurDelivery from '../components/about/OurDelivery'
import ValuesTitle from '../components/about/ValuesTitle'
import CoreValue from '../components/about/CoreValues'
import GetStartedCTO from '../components/about/GetStartedCTO'

const About = () => {
  return (
    <div>
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