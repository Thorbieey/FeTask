import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'
import Navbar from './components/Navbar.jsx'
import Verifiers from './components/verifiers.jsx'
import Header from './components/Header'


const Layout = () => {
  return (
    <div style={{ gridTemplateColumns: '256px repeat(auto-fit, minmax(256px, 1fr))' }} className='grid ' >
        <div><Navbar/></div>
        <div className='h-screen overflow-hidden'>
           <Header/>
           <Outlet/>
        </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    // element: <App />,
    element: <SignIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard/verifiers', 
        element: <Verifiers />
      },
      {
        path: '/dashboard/deals',
        element: <div>deals</div>
      },
      {
        path: '/dashboard/transactions',
        element: <div>transactions</div>
      }
    ]
  }
])
function App() {

  return (
      <div className='App w-full h-full'>
          <RouterProvider  router={router}/>
      </div>
  )
}

export default App
