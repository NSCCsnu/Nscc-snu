import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { MobileNav } from '../Navbar/MobileNavbar/MobileNav'

export const Layout = ({children}) => {
  return (
    <div>
        <div className="mb-12
     "> <Navbar/></div>
      <main >
        

        {children}
      </main>
      <MobileNav/>
    </div>
  )
}
