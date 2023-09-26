import React, { useState } from "react";
import logo2 from "../../../../assets/logo2.png"
export const CTA = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <div className="px-10">
                
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5  md:pl-10 pb-10 lg:py-36 ">
                            <h1 className="text-3xl lg:text-6xl xl:text-4xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color py-3">NSCC-SNU</h1>
                            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
         
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-800 text-lg lg:text-lg">NSCC SNU officially opened in SNU on 21stth september, 2022, in order to inculcate the professional elements provided by the student branch to its students. It comprises of over 300+ students currentl </h2>
                            <p className="w-full md:w-4/5 text-gray-600">Under the SKEPSIS,several events like fests, workshops, seminars, social activities and internal training sessions through student maintained clubs are regularly held. These activities help the students in imparting the ideas and knowledge required in this fast growing IT enhanced world.</p>
                            {/* <div className="w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button>
                            </div> */}
                        </div>
                        <div className="w-full md:w-1/2  h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="  md:absolute md:w-1/2 md:-ml-28" 
                            src={logo2} alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
