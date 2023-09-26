import React from 'react'
export const Banner = () => {


  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown" 
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +
      "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div>

      <section class="text-gray-600 body-font bg-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <div className="  ">
              <h1 className="text-3xl lg:text-6xl xl:text-4xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color pt-3">
                Code-Rush-X</h1>
              <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              <p className='text-gray-600 font-bold mt-3'>12/4/2023 9:00:00 pm -  12/4/2023 11:59:59 pm</p>
              <div class="CardElements_desc__ceZz2"><p>India’s biggest competitive programming with price pool worth ₹10,00,000 &amp; 500+ hiring partners! Win Goodies and Amazon Gift Vouchers</p></div>

              <div class="flex pt-9 justify-center  md:justify-start">
                <div class="bg-gray-50 rounded-lg shadow-lg px-8 py-6">
                  <div class="flex flex-col gap-4 items-center justify-between">

                    <span id="countdown" class="text-2xl font-semibold text-gray-700"></span>
                  </div>

                </div>
              </div>


            </div>

<div className="flex justify-center mx-auto mt-5 md:mt-0">
<div class="w-32 mx-6 flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
              <div class="block rounded-t overflow-hidden   ">
                <div class="bg-blue-500 text-white py-1">
                  March
                </div>
                <div class="pt-1 border-l border-r border-white bg-white">
                  <span class="text-5xl font-bold leading-tight">
                    17
                  </span>
                </div>
                <div class="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                  <span class="text-sm">
                    Sunday
                  </span>
                </div>
                <div class="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                  <span class="text-xs leading-normal">
                    8:00 am to 5:00 pm
                  </span>
                </div>
              </div></div>
</div>
           
            {/* <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
