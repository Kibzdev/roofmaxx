import ServiceBanner from '../../components/service/ServiceBanner';
import ServiceBreadcrumbNav from '../../components/service/ServiceBreadcrumb';
import NavigationCard from '../../components/projects/NavigationCard';


export default function ProjectDetailLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
     <div className='flex'>
      <div className='flex w-full'>
         {children}
      </div>
     
     
     </div>
      
    </section>
  )
}