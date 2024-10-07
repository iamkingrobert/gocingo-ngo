import React from 'react'
import { IoPlay } from "react-icons/io5";


function Hero() {
  return (
    <section className="max-w-8xl  container mx-auto ">
      <div className="flex justify-center p-10">
        <div className="text-center lg:w-1/2 animate__animated animate__fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium ">Great futures are built </h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium">with a small charity</h2>

          <p className="my-5 lg:my-10 font-medium sm:text-lg lg:text-xl text-gray-500">Nigeria's largest social fundraising platform, optimized for your charity in a more easy way</p>

          <div className="inline-flex gap-4">
            <button className="bg-slate-700 text-white px-5 py-2 rounded-full">Donate now</button>
            <button className="bg-gray-300 text-slate-700 px-5 py-2 rounded-full inline-flex items-center gap-4 font-medium hover:bg-slate-700 hover:text-white "> <IoPlay /> Watch Video</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero