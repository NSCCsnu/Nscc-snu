import { Link } from "react-router-dom"
import "./Navbar.css"


export const Navbar = () => {

    return (
        <div>
            <header>
                <nav class="bg-gray-800 z-20 drop-shadow-xl fixed top-0  w-full border-gray-200 px-4 lg:px-6 py-3 darkno:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" class="flex items-center">
                            <img src="https://nscc-snu.netlify.app/assets/ethereal-2.0/logo.png" class="mr-3 h-6 sm:h-9 rounded-lg" alt="Flowbite Logo" />
                            <span class="self-center text-xl text-gray-100 font-semibold whitespace-nowrap darkno:text-white">NSCC-SNU</span>
                        </a>
                        <div class="flex gap-2 items-center lg:order-2">
                            <a href="#" class="text-gray-800 darkno:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  darkno:hover:bg-gray-700 focus:outline-none darkno:focus:ring-gray-800">
                                <img className="h-7 w-7" src="https://img.icons8.com/?size=96&id=oWiuH0jFiU0R&format=png" alt="" />
                            </a>
                            <a href="#" class="text-gray-800 darkno:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  darkno:hover:bg-gray-700 focus:outline-none darkno:focus:ring-gray-800">
                                <img className="h-7 w-7" src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png" alt="" />
                            </a>
                            <a href="https://icons8.com/icons/set/instagram" class="text-gray-800 darkno:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  darkno:hover:bg-gray-700 focus:outline-none darkno:focus:ring-gray-800">
                                <img className="h-7 w-7" src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png" alt="" />
                            </a>
                            <a href="https://icons8.com/icons/set/instagram" class="text-gray-800 darkno:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  darkno:hover:bg-gray-700 focus:outline-none darkno:focus:ring-gray-800">
                                <img className="h-7 w-7" src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="" />
                            </a>

                           
                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link to="/" class="text block py-2 pr-4 pl-3 text-gray-100 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 darkno:text-white" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/events" class="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 darkno:text-gray-400 lg:darkno:hover:text-white darkno:hover:bg-gray-700 darkno:hover:text-white lg:darkno:hover:bg-transparent darkno:border-gray-700">Events</Link>
                                </li>
                                <li>
                                    <Link to="/gallery" class="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 darkno:text-gray-400 lg:darkno:hover:text-white darkno:hover:bg-gray-700 darkno:hover:text-white lg:darkno:hover:bg-transparent darkno:border-gray-700">Gallary</Link>
                                </li>
                                <li>
                                    <Link to="/team" class="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 darkno:text-gray-400 lg:darkno:hover:text-white darkno:hover:bg-gray-700 darkno:hover:text-white lg:darkno:hover:bg-transparent darkno:border-gray-700">Team</Link>
                                </li>

                                <li>
                                    <Link to="/contactUs" class="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 darkno:text-gray-400 lg:darkno:hover:text-white darkno:hover:bg-gray-700 darkno:hover:text-white lg:darkno:hover:bg-transparent darkno:border-gray-700">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}
