import React from 'react'
import { Layout } from '../Layout'

export const ContactUS = () => {
  return (
    <Layout>
        
        <section class="pt-4 bg-white darrkno:bg-gray-900">
    <div class="container px-6 py-3 mx-auto">
        <div>
            <p class="font-medium text-blue-400 darrkno:text-blue-400">Contact us</p>

            <h1 class="mt-2 text-2xl font-extrabold text-gray-800 md:text-3xl darrkno:text-white">Chat to our friendly team</h1>

            <p class="mt-3 text-gray-500 darrkno:text-gray-400 font-bold">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10  pl-8 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12  md:grid-cols-2">
                <div>
                    <span class="inline-block p-3 text-blue-400 rounded-full bg-gray-700 darrkno:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 darrkno:text-white">Email</h2>
                     <p class="mt-2 text-sm text-blue-400 darrkno:text-blue-400 font-bold">hello@merakiui.com</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-400 rounded-full bg-gray-700 darrkno:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 darrkno:text-white">Live chat</h2>
                     <p class="mt-2 text-sm text-blue-400 font-bold darrkno:text-blue-400">Start new chat</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-400 rounded-full bg-gray-700 darrkno:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 darrkno:text-white">Office</h2>
                    <p class="mt-2 text-sm text-gray-500 darrkno:text-gray-400 font-bold">Come say hello at our office HQ.</p>
                           </div>

                <div>
                    <span class="inline-block p-3 text-blue-400 rounded-full bg-gray-700 darrkno:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 darrkno:text-white">Phone</h2>
                       <p class="mt-2 text-sm text-blue-400 darrkno:text-blue-400 font-bold">+1 (555) 000-0000</p>
                </div>
            </div>

            <div class="p-4 py-6 -mt-28 rounded-lg bg-gray-700 md:p-8">
                <form>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-200">First Name</label>
                            <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-lg darrkno:placeholder-gray-600 darrkno:bg-gray-900 darrkno:text-gray-300 darrkno:border-gray-700 focus:border-blue-400 darrkno:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-lg darrkno:placeholder-gray-600 darrkno:bg-gray-900 darrkno:text-gray-300 darrkno:border-gray-700 focus:border-blue-400 darrkno:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-lg darrkno:placeholder-gray-600 darrkno:bg-gray-900 darrkno:text-gray-300 darrkno:border-gray-700 focus:border-blue-400 darrkno:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-200">Message</label>
                        <input class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-800 bg-white border border-gray-200 rounded-lg darrkno:placeholder-gray-600 darrkno:bg-gray-900 darrkno:text-gray-300 darrkno:border-gray-700 focus:border-blue-400 darrkno:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></input>
                    </div>

                    <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
    </Layout>
  )
}
