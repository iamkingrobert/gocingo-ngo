'use client'
import Contact from '@/components/Contact';
import PageBanner from '@/components/PageBanner';
import React from 'react';
import contactBanner from '../images/contactUs.jpg'
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";



const ContactUs = () => {
  

  return (
    <section>
      <PageBanner title={"Contact Us"} bannerImage={contactBanner}/>


      <div className="max-w-8xl container mx-auto py-20 flex justify-center animate__animated animate__fadeInUp">
        <div className="bg-white grid md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className=" p-6  rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-gray-600">
            <h2 className="text-4xl font-semibold mb-4">Our Contacts</h2>
            <p className="mb-2">Feel free to reach out to us through any of the methods below:</p>

            <div className="flex flex-col gap-10 mt-5">
              <div className="flex gap-2 items-center ">
                <div className="p-2 shadow rounded-lg ">
                  <MdEmail size={30} />
                </div>
                <p className="text-xl">robert@example.com</p>
              </div>
              <div className="flex gap-2 items-center ">
                <div className="p-2 shadow rounded-lg ">
                  <MdPhone size={30} />
                </div>
                <p className="text-xl">+123 456 7890 | +234 806 784 0901 </p>
              </div>
              <div className="flex gap-2 items-center ">
                <div className="p-2 shadow rounded-lg ">
                  <MdLocationPin size={30} />
                </div>
                <p className="text-xl">Victoria Island Lagos - Find Us</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <Contact/>
        </div>
      </div>


      {/* MAP LOCATION  */}
      <div>

      </div>
    </section>
  );
};

export default ContactUs;
