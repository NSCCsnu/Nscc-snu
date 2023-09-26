import React from 'react'
import "./Hero.css"
import logo from "../../../../assets/logo.png"
export const Hero = () => {
  return (
    <div className=''>
        <section class="bg-gray-900 z-50 md:pb-0 pb-24">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-s rounded-full bg-gray-800 text-white  hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-[#49e1c8] px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium text-[#49e1c8]">Nscc snu is out! See what's new</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#69aae0] md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex mb-5 md:mb-0 flex-col lg:mb-6 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <img className='h-28' src={logo} alt="" />
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div class="flex gap-8 justify-center items-center mt-8 text-gray-500 ">
                
                <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                   <img className='h-11 w-32 rounded-md filter brightness-75 hover:brightness-100' src="https://media.licdn.com/dms/image/C561BAQGQFHjoGsBNfg/company-background_10000/0/1627011691596?e=1696158000&v=beta&t=TEFb7X9vY5epChewsO-tjLtyYlPFbE-9syzdFuCtJAs" alt="" />                        
                </a>
                <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                   <img className='h-11 w-32 rounded-md filter brightness-75 hover:brightness-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9am85lJMasXz3Fxl0YB3p0w1C50hHwzneEaO2oCaW0csNQTwalAOrSDcziBcU3Nu5nA&usqp=CAU" alt="" />                        
                </a>         
            </div>
        </div> 
    </div>
</section>

            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
   
    </div>
  )
}
