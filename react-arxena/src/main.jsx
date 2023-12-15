import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../src/assets/bootstrap.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/signUp',
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
