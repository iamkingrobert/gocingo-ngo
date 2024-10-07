import React from 'react'

import Image from 'next/image';

function PageBanner({title,bannerImage}) {
    
  return (
    <div className="bg-gray-300 h-96 relative overflow-hidden">
        <Image src={bannerImage} alt="bg" className="w-full h-full object-cover" />
        <div className="absolute w-full h-full inset-0 grid place-content-center bg-black/50 text-white">
          <h2  className="font-bold text-4xl lg:text-8xl animate__animated animate__fadeInUp ">{title}</h2>
        </div>
      </div>
  )
}

export default PageBanner