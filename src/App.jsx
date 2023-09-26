import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/pages/Home/Home';
import { Team } from './components/pages/Teams/Team';
import { ContactUS } from './components/pages/Contact/ContactUS';
import { Event } from './components/pages/Event/Event';


const router = createBrowserRouter([
  {
    path: "/",
    element:<> <Home/></> 
  },
  {
    path: "/team",
    element:<><Team/></>
   } ,
   {
    path: "/contactUs",
    element:<><ContactUS/></>
   } ,
   {
    path: "/events",
    element:<><Event/></>
   } ,
  
]);

function App() {
  

  return (
    <>

<RouterProvider router={router}/>

    </>
  )
}

export default App
