'use client'
import React, { useEffect, useState } from "react";
import ModalComponent from "../Modal";
import DonationForm from "../DonationForm";
import Image from "next/image";
import logo from '@/app/images/logo.png'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky z-50 top-0 w-full px-5 md:px-0 border border-b">
      <div className="max-w-8xl  container mx-auto ">
        <div className="flex items-center justify-between py-5 ">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <a href="/">
                <Image src={logo} className=" w-28"  alt="Logo" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-semibold"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-semibold"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-semibold"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-slate-700 text-white px-5 py-2 rounded-full"  onClick={openModal}>Donate now</button>
            </div>
          </div>


          {/* toogle button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-1 rounded-md text-gray-400 "
            >
                
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>



      {/* MOBILE NAVIGATION */}

      {isOpen && (
        <div className="md:hidden fixed top-[70px] right-0 h-screen bg-white/90 backdrop-blur-xl z-40 w-[50%]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-700 hover:text-slate-700 hover:bg-blue-100  block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-gray-700 hover:text-slate-700 hover:bg-blue-100  block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="/projects"
              className="text-gray-700 hover:text-slate-700 hover:bg-blue-100  block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-slate-700 hover:bg-blue-100  block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <a
              href="/#"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="bg-slate-700 text-white px-5 py-2 rounded-full" onClick={openModal}>Donate now</button>
            </a>
           
          </div>
          
        </div>
      )}


      {/* MODAL VIEW COMPOENET */}
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} contentLabel="Example Modal">
        <h2 className="text-xl font-semibold mb-4">Make a donation today</h2>
        <p className="text-gray-600">A donation can change a </p>
        <DonationForm/>
      </ModalComponent>
    </nav>
  )
}

export default Navbar