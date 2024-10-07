import React from 'react'

function Stripes() {
  return (
    <div className="relative w-full h-80 flex justify-center items-center overflow-x-clip mb-10" data-aos="fade-up">
      {/* Background Diagonal Div */}
      <div className="absolute w-screen h-20 bg-green-700 transform rotate-1 flex items-center text-white font-semibold text-6xl whitespace-nowrap overflow-hidden text-ellipsis">
        er * let's help each other * let's help each other * let's help each other
      </div>
      <div className="absolute w-screen h-20 bg-lime-300 transform -rotate-6 translate-y-28 flex items-center text-green-700 font-semibold text-6xl whitespace-nowrap overflow-hidden text-ellipsis">
      er * let's help each other * let's help each other * let's help each other
      </div>
     
    </div>
  )
}

export default Stripes