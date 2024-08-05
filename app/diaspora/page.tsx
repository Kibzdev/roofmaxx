import React from 'react'
import PageIntro from '../components/PageIntro'
import ValueStatement from '../components/diaspora/ValueStatement'
import Cordy from '../components/diaspora/Cordy'
import Pay from '../components/diaspora/Pay'
import Tailored from '../components/diaspora/Tailored'
import GetStartedCTO from '../components/GetStartedCTO'

const page = () => {
  return (
    <div className='mt-40 flex-col'>
       <PageIntro  title="Diaspora Build" />
        <div>
          {/* Diaspora Statement */}
          <ValueStatement/>
          <Cordy/>
          <Pay/>
          <Tailored/>
          <GetStartedCTO/>
        </div>
    </div>
  )
}

export default page