import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'

import { Outlet } from 'react-router'

export const PublicLayout = () => {
  return (
    <div className='w-full'>
        {/*handler to store user data*/}
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}
