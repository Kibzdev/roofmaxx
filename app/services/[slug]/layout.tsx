
import NavigationCard from '../../components/projects/NavigationCard';
export default function ServiceDetailLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
     <div className='flex'>
      <div className='w-full flex '>
         {children}
      </div>
      {/* <div className='hidden md:block flex-w-1/5'>
      <NavigationCard/>
      </div> */}
     </div>
      
    </section>
  )
}