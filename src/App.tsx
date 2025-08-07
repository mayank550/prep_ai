import { BrowserRouter as Router,Routes,Route } from 'react-router'
import { PublicLayout } from '@/layouts/public_layouts'
import HomePage from '@/routes/home_page'
import AuthenticationLayout from '@/layouts/auth_layout'
import SignInPage from '@/routes/sign-in'
import SignupPage from '@/routes/sign-up'
import ProtectedRoute from '@/layouts/protected-routes'
import { MainLayout } from '@/layouts/main_layout'

const App = () => {
  return (
     <Router>
      <Routes>
        {/* public routes*/}

         <Route element={<PublicLayout/>}>
         <Route index element={<HomePage/>}/>
         
         </Route>
         {/* authentication layout */}
         <Route element={<AuthenticationLayout/>}>
         <Route path="/signin/*" element={<SignInPage/>}/>
         <Route path="/signup/*" element={<SignupPage/>}/>
         
         </Route>

        {/* private routes*/}
       <Route element={<ProtectedRoute><MainLayout/></ProtectedRoute>}>
        {/* add all protected routes */}
       </Route>
      </Routes>
     </Router>
  )
}

export default App

