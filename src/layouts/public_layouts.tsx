import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import AuthHandler from '@/handlers/auth_handler'

import { Outlet } from 'react-router'

export const PublicLayout = () => {
  return (
    <div className='w-full'>
        {/*handler to store user data*/}
        <AuthHandler/>
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}
