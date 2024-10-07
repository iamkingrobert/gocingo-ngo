'use client'
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
    };

    // max-w-8xl container mx-auto

    return (
        <footer className="md:p-0 bg-green-800 ">
            <div className=" max-w-8xl container mx-auto p-5">
                
                {/* Newsletter Subscription Section */}
                <div className="bg-white p-6 rounded-2xl mb-8">
                    <h2 className="text-green-800 text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-green-600 mb-4">
                        Stay updated with our latest projects and activities by subscribing to our newsletter.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
                        <input 
                            type="email"
                            className="flex-1 p-3 border border-green-600 rounded-md"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button 
                            type="submit" 
                            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Donate Button */}
                <button className="mt-4 mb-4 w-60 flex items-center justify-between px-4 py-3 bg-white text-green-600 rounded-xl">
                    <span>Donate now</span>
                    <div className="w-6 h-6 bg-lime-300 rounded-full flex justify-center items-center">
                        <FiArrowUpRight />
                    </div>
                </button>

                <hr className="bg-white" />

                {/* Footer Links and Social Icons */}
                <div className="flex flex-wrap justify-between mt-5 gap-5">
                    <div className="inline-flex gap-3 md:gap-10 text-white text-xs md:text-normal">
                        <p>2024 Gocingo Foundation Nigeria.</p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Terms of Use</a></p>
                    </div>

                    <div className="inline-flex gap-3 md:gap-10 text-white">
                        <a href="#" className="text-white hover:text-green-800 transition duration-300">
                            <BsTwitterX />
                        </a>
                        <a href="#" className="text-white hover:text-green-800 transition duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white hover:text-green-800 transition duration-300">
                            <FaFacebook />
                        </a>
                    </div>
                </div>

                {/* Footer Description */}
                <div className="text-white my-5 text-xs md:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam veritatis dolore, ea non nemo enim explicabo consequatur minima molestias dicta id praesentium ab repudiandae dolores minus rem deserunt, atque quo aut iste perferendis magni? Dicta, quia quidem. Voluptatem, eligendi quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iure nulla libero accusamus distinctio, ad fugiat facilis accusantium molestias illum cupiditate, quae eius commodi voluptatum perferendis quidem dignissimos corrupti enim.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
