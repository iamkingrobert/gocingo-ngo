'use client'
import React, { useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import 'animate.css';
import { FaRegSmile, FaHeart } from "react-icons/fa";
import hero1 from '@/app/images/hero1.jpg'
import hero2 from '@/app/images/hero2.jpg'
import hero3 from '@/app/images/hero3.png'
import Image from 'next/image';
import ModalComponent from '../Modal';
import DonationForm from '../DonationForm';



// flex justify-center  items-baseline
function HeroSectionCards() {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    return (
        <div className="max-w-8xl  container mx-auto py-10 p-5 lg:px-0 ">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 ">
                {/* First Card */}
                <div className="flex flex-col gap-5 self-end animate__animated animate__fadeInUp">
                    <div className="flex flex-col justify-between  h-80 p-4 bg-green-800 text-white rounded-3xl">
                        <div>
                            <h2 className="text-5xl font-bold">65%</h2>
                            <p className="mt-2 text-sm">
                                17 Thousand People Died, Thousand Injured, Houses and Buildings Destroyed. Turkey-Syria Grieves.
                            </p>
                        </div>
                        <button className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-green-700 text-green-800 rounded-xl" onClick={openModal}>
                            <span className="text-white">Donate now</span>
                            <div className="w-6 h-6 bg-lime-300 rounded-full flex justify-center items-center">
                                <FiArrowUpRight />
                            </div>
                        </button>
                    </div>
                    <div className="bg-black text-white p-4 rounded-3xl flex items-center gap-5">
                        <div><FaRegSmile size={50} /></div>
                        <div className="text-3xl">
                            Let them <br /> be heard
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="relative h-96 overflow-hidden rounded-3xl self-end animate__animated animate__fadeInUp">
                    <Image src={hero1} alt="Health" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 p-4 bg-black bg-opacity-40 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg text-white font-semibold">Health</h3>
                        </div>
                        <p className="text-white text-xl lg:w-[80%] py-3">Life skills for 2,587 Children in South Africa</p>
                    </div>
                </div>

                {/* Center Card */}
                <div className="flex flex-col gap-5 justify-center h-auto px-2  self-end bg-gray-200 text-black rounded-3xl animate__animated animate__fadeInUp">
                    <p className="text-center text-xl px-4 font-medium pt-10">Join 5000+ People Donate</p>
                    <div className="py-2">
                        <button className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-slate-300 text-green-800 rounded-2xl" onClick={openModal}>
                            <span>Donate now</span>
                            <div className="w-6 h-6 bg-gray-600 rounded-full flex justify-center items-center text-white">
                                <FiArrowUpRight />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Third Card */}
                <div className="relative h-96 overflow-hidden rounded-3xl self-end animate__animated animate__fadeInUp">
                    <Image src={hero2} alt="Education" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 p-4 bg-black bg-opacity-40 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg text-white font-semibold">Education</h3>
                        </div>
                        <p className="text-white lg:w-[70%] text-xl text-medium  ">Sponsor food, education to orphans India</p>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="flex flex-col gap-5 self-end animate__animated animate__fadeInUp">
                    <div className="flex flex-col justify-between h-80 bg-lime-300 text-white rounded-3xl overflow-hidden relative">
                        <Image src={hero3} alt="image" className="w-full h-full object-cover grayscale" />

                        <div className="p-2 absolute w-full bottom-0">
                            <button className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-lime-500 text-green-800 rounded-2xl" onClick={openModal}>
                                <span>Donate now</span>
                                <div className="w-6 h-6 bg-lime-300 rounded-full flex justify-center items-center">
                                    <FiArrowUpRight />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="bg-green-900 text-lime-200 p-4 rounded-3xl flex items-center justify-center gap-5 ">
                        <div><FaHeart size={50} /></div>
                        <div className="text-3xl">
                            Your home for help
                        </div>
                    </div>
                </div>
            </div>


            <ModalComponent isOpen={isModalOpen} onClose={closeModal} contentLabel="Example Modal">
                <h2 className="text-xl font-semibold mb-4">Make a donation today</h2>
                <p className="text-gray-600">A donation can change a </p>
                <DonationForm />
            </ModalComponent>
        </div>
    )
}

export default HeroSectionCards