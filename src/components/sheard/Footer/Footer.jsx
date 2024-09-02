"use client";

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="transition-transform duration-500 ease-in-out transform translate-x-0 md:translate-x-0 bg-[#09101A] py-16" id="footer">
      <div className="block md:flex justify-center md:justify-between items-start p-5 md:p-16">
        
        <nav className="flex justify-center items-start text-center">
          <div className="w-12 h-12 items-start hidden md:flex text-center justify-center text-black text-lg bg-[#0ef] ml-3 mt-3 p-4 rounded-full">
            <FaLocationDot />
          </div>
          <div className="m-3 p-2 text-center md:text-left">
            <h6 className="font-semibold text-gray-100 text-xl mb-2">Address</h6>
            <p className='text-gray-200'>Khagrachari, Chittagong, Bangladesh</p>
          </div>
        </nav>
        
        <nav className="relative mx-auto md:m-0 text-center">
          <h6 className="font-semibold text-gray-100 text-xl mb-2">Social Media</h6>
          <div className="relative inline-block text-center">
            <input type="checkbox" id="toggle" className="peer hidden" />
            <label htmlFor="toggle" className="block w-16 h-16 rounded-full bg-[#1DA2FF] cursor-pointer relative z-10 transition-transform duration-1000 ease-in-out transform">
              <span className="absolute top-1/2 left-1/2 w-8 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-0 transition-transform duration-1000 ease-in-out peer-checked:rotate-45"></span>
              <span className="absolute top-1/2 left-1/2 w-1 h-8 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-0 transition-transform duration-1000 ease-in-out peer-checked:-rotate-45"></span>
            </label>
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 peer-checked:flex peer-checked:opacity-100 peer-checked:scale-100 scale-0 opacity-0 transition-transform duration-1000 ease-in-out">
              {['facebook', 'github', 'linkedin', 'twitter', 'instagram', 'whatsapp'].map((platform, index) => (
                <li key={platform} className="absolute transition-transform transform duration-500 hover:scale-110" style={{
                  transform: `rotate(${index * 60}deg) translateX(100px) rotate(-${index * 60}deg)`,
                }}>
                  <a
                    href={`https://${platform}.com/mdkawsar.ahamed.9083477`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full
                     bg-[#1DA2FF] text-white hover:bg-[#0ef] transition-colors"
                  >
                    {platform === 'facebook' && <FaFacebook className="text-xl" />}
                    {platform === 'github' && <FaGithub className="text-xl" />}
                    {platform === 'linkedin' && <FaLinkedin className="text-xl" />}
                    {platform === 'twitter' && <FaTwitter className="text-xl" />}
                    {platform === 'instagram' && <FaInstagram className="text-xl" />}
                    {platform === 'whatsapp' && <FaWhatsapp className="text-xl" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <nav className="block text-center pt-28 md:pt-0">
          <h6 className="font-semibold text-gray-100 text-xl mb-2">{`Let's talk`}</h6>
          <p className="m-1 text-gray-200">+8801557132665</p>
          <p className="m-1 text-gray-200">+8801780270537</p>
        </nav>
        
      </div>
      
      <aside>
        <p className="text-center text-gray-200">{`Copyright © 2024 - All rights reserved`}</p>
      </aside>
    </footer>
  );
};

export default Footer;
