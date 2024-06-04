import ServiceBanner from '../../components/service/ServiceBanner';
import ServiceBreadcrumbNav from '../../components/service/ServiceBreadcrumb';
import NavigationCard from '../../components/service/NavigationCard';


export default function ProjectDetailLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <ServiceBanner serviceId='34'/>
      <ServiceBreadcrumbNav/>

     <div className='flex'>
      <div className='flex w-4/5'>
         {children}
      </div>
      <div className='flex-w-1/5'>
      <NavigationCard/>
      </div>
     
     </div>
      
    </section>
  )
}