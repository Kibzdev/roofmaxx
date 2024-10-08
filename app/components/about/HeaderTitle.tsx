import React from 'react';
import Container from '../Container';
import PageIntro from '../PageIntro';

const HeaderTitle: React.FC = () => {
  return (
    <div className='ml-10'>
     <PageIntro eyebrow="Know Us" title="Roofmax">
        <p className='font-normal text-sm md:text-lg text-gray-600 leading-6'>We can not wait to hear from you.</p>
      </PageIntro>
      
    </div>
    
    
  );
}

export default HeaderTitle;
