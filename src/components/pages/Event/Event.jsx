import React from 'react'

import { EventCard } from './EventCard/EventCard'
import { EventCardLeft } from './EventCard/EventCardLeft'
import { Layout } from '../Layout'

export const Event = () => {
  return (
    <Layout>
        <div class=" bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-2xl  text-center  capitalize lg:text-3xl text-[#49e1c8] mb-5">
                Events</h1>
            <h1 class="xl:text-4xl text-3xl text-center text-gray-100 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Organization</h1>

            <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p class="max-w-2xl mx-auto mt-6 text-center text-gray-300">
            We've successfully organised and hosted 14+ seminars, workshops & fests last year and this time around we intend to go beyond!
            </p>
        </div>
    </div>
        <div className="flex gap-1 flex-col mt-16">
            <EventCard/>
            <EventCardLeft/>
            <EventCard/>
            <EventCardLeft/>
            <EventCard/>
            <EventCardLeft/>
            <EventCard/>
        </div>
        
    </Layout>
  )
}
