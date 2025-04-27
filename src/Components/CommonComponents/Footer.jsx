import React from 'react'

const Footer = () => {
  return (

<footer class="block">

  <div class="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">

    <div class="sm:flex-row flex justify-between flex-col">
      <h2 class="font-bold text-3xl md:text-5xl w-full max-w-xl">
        Lightning fast Webflow Dev made easy
      </h2>
      <div class="mt-8 md:mt-0">
        <div class="mb-4 flex max-w-72 items-start justify-start">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg" alt="" class="inline-block mr-3" />
          <p class="text-gray-500 text-sm sm:text-base">
            8502 Preston Rd. Inglewood, Maine 98380, USA
          </p>
        </div>
        <div class="mb-4 flex max-w-72 items-start justify-start">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg" alt="" class="inline-block mr-3" />
          <p class="text-gray-500 text-sm sm:text-base">
            support@flowspark.co
          </p>
        </div>
      </div>
    </div>
    <div class="mb-14 w-full border-b border-black mt-16"></div>
    <div class="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
      <div class="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
        <a href="javascript:void(0);" class="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
          About
        </a>
        <a href="javascript:void(0);" class="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
          Features
        </a>
        <a href="javascript:void(0);" class="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
          Works
        </a>
        <a href="javascript:void(0);" class="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
          Support
        </a>
        <a href="javascript:void(0);" class="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
          Help
        </a>
      </div>
      <p class="text-gray-500 text-sm sm:text-base">
        © Copyright 2021. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer