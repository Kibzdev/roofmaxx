import React from 'react'
import PageIntro from '../components/PageIntro'
import ValueStatement from '../components/diaspora/ValueStatement'
import Cordy from '../components/diaspora/Cordy'
import Pay from '../components/diaspora/Pay'
import Tailored from '../components/diaspora/Tailored'

const page = () => {
  return (
    <div className='mt-40 flex-col'>
       <PageIntro eyebrow='Home Team' title="Diaspora Build" >
          <p className='mt-4 text-gray-500 tracking-normal md:text-lg text-sm'>
            Ready to start your project? Contact us today and let &lsquo;s build the future together.
          </p>
        </PageIntro>
        <div>
          {/* Diaspora Statement */}
          <ValueStatement/>
          <Cordy/>
          <Pay/>
          <Tailored/>
        </div>
    </div>
  )
}

export default page