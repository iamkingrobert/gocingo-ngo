'use client';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import image1 from '@/app/images/kid2.jpg';
import image2 from '@/app/images/kid4.jpg';
import image3 from '@/app/images/value2.jpg';
import image4 from '@/app/images/value3.jpg';
import Image from 'next/image';

function Fundraiser() {
  // Intersection Observer for the section
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.3,    // Adjust this to control when the counter starts (0.3 means when 30% of the section is in view)
  });

  return (
    <div className="max-w-8xl container mx-auto py-10 px-5 md:px-0">
      <div>
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="md:text-4xl text-2xl font-semibold">Fundraisers In Extreme Need</h1>
          <a href="/projects" className="text-blue-500">View all</a>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap items-baseline gap-4 py-10" data-aos="fade-up">
          {/* First Card */}
          <div className="flex flex-col gap-5 flex-1 self-end">
            <div className="relative h-full bg-green-800 text-white rounded-3xl overflow-hidden">
              <Image src={image2} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-semibold absolute bottom-4 md:p-4 p-1">
                Help Turkey and Syria <span className="text-green-300">Earthquake Relied Fund</span>
              </p>
            </div>

            <div className="bg-black h-32 text-white rounded-3xl flex relative overflow-hidden">
              <Image src={image1} alt="imagehere" className="w-full h-full object-cover" />
              <p className=" mt-2 text-sm md:text-2xl font-semibold absolute bottom-4 text-center w-full">
                Education in <span className="text-green-300">Iraq</span>
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col gap-5 flex-1 self-end">
            <div className="relative h-full bg-green-800 text-white rounded-3xl overflow-hidden">
              <Image src={image2} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-semibold absolute bottom-4 p-4">
                Help Turkey and Syria <span>Earthquake Relied Fund</span>
              </p>
            </div>

            <div className="bg-black h-32 text-white rounded-3xl flex relative overflow-hidden">
              <Image src={image1} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-semibold absolute bottom-4 text-center  w-full">
                Education in <span className="text-green-300">Iraq</span>
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-col gap-5 flex-1" data-aos="fade-up">
            <div className="bg-black h-32 text-white rounded-3xl flex relative overflow-hidden">
              <Image src={image2} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm md:text-2xl font-semibold absolute bottom-4 text-center w-full">
                 <span className="text-green-300">Flood in</span> Manipur
              </p>
            </div>
            <div className="relative h-full bg-green-800 text-white rounded-3xl overflow-hidden">
              <Image src={image2} alt="imagehere" className="w-full h-full object-cover" />
              <p className="mt-2 text-sm absolute bottom-4 p-4  md:text-2xl font-semibold">
                 <span className="text-green-300">Childhood labour</span> in world
              </p>
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div className="flex flex-wrap md:flex-nowrap lg:justify-between justify-center items-stretch lg:px-20 gap-5" data-aos="fade-up" data-aos-duration="300">
          <div className="lg:flex-2 flex md:flex-col gap-10">
            <div className="bg-gray-300 w-40 h-40 rounded-3xl overflow-hidden">
              <Image src={image1} alt="image" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="bg-gray-300 w-40 h-40 rounded-3xl overflow-hidden">
              <Image src={image2} alt="image" className="w-full h-full object-cover grayscale" />
            </div>
          </div>

          {/* The Counter */}
          <div ref={ref} className="lg:flex-2 px-10 text-center flex flex-col justify-between">
            <div>
              <div className="text-center">
                <p className="font-medium md:text-xl">
                  Join our community for donating and be a part of a <br /> positive change in the world. With over:
                </p>
              </div>
              <div className="text-6xl font-semibold lg:pt-10 py-5">
                {inView && (
                  <CountUp
                    start={0}
                    end={120859}
                    duration={15}
                    separator=","
                    decimals={0}
                    suffix="+"
                  />
                )}
              </div>
            </div>
            <div>
              <p className="font-medium text-xl">people already joining </p>
              <button className="bg-blue-950 text-white md:px-10 px-4 py-2 rounded-full mt-1">
                Yes. I want to join the community
              </button>
            </div>
          </div>

          <div className="lg:flex-2 flex md:flex-col gap-10">
            <div className="bg-gray-300 w-40 h-40 rounded-3xl overflow-hidden">
              <Image src={image3} alt="image" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="bg-gray-300 w-40 h-40 rounded-3xl overflow-hidden">
              <Image src={image4} alt="image" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundraiser;
