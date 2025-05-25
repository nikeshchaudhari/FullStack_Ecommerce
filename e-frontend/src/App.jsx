import React from 'react'
import './index.css'
import Header from './Component/Header'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
import Helpcenter from './Component/Helpcenter'
import Tracking from './Component/Tracking'
import Home from './Component/Home'
const App = () => {
  const myrouter= createBrowserRouter([
    {path:"",Component:Home,children:[
    {path:"/helpcenter",Component:Helpcenter},
    {path:"/tracking",Component:Tracking},
    ]},
    
  ])
  return (
 <>
<RouterProvider router={myrouter}></RouterProvider>


 </>
  )
}

export default App