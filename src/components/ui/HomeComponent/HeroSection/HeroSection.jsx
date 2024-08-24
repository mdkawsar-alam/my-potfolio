'use client';
import Button from '@/components/sheard/Button/button';
import Container from '@/components/sheard/Contatiner/Container';
import { images } from '@/index';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const texts = [
  "Front-End Developer",
  "MERN Stack Developer",
];

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeout;

    if (isTyping && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // Typing speed
    } else if (charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 4000); // Hold time after typing one text
    }

    if (isTransitioning) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }, 500); // Duration of the transition effect
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex, isTransitioning]);

  const downloadResume = () => {
    const resumeUrl = '/path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kawsar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.banner.src})` }}>
      <Container>
      <div className="flex flex-col lg:flex-row items-center text-center pb-8 pt-24 lg:text-left px-5 md:px-14">
          <div className="w-full flex flex-col  lg:w-1/2  space-y-3 md:space-y-6">
            <h1 className="relative font-bold text-white uppercase text-[20px] lg:text-[28px] font-serif">
              HI I'M Kawsar!
              <br />
              <span className={`relative inline-block uppercase transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {displayedText}
                <span className={`border-l-2 border-[#0ef] ${isTyping ? 'animate-blink' : ''}`}></span>
              </span>
            </h1>
           <div className="flex">
          <div className='w-full md:w-1/2 lg:w-full space-y-5'>
          <p className="text-gray-300 font-serif  ">
              "I am a Front End web Developer (MERN), concurrently finishing my Diploma in Computer Science.
              With a year of immersive web development experience, my goal is to reach a senior role in
              Frontend Web Development within two years. Committed to staying updated on emerging technologies,
              I ensure my knowledge remains cutting-edge in the dynamic field of web development."
            </p>
            <div className="flex justify-center mt-4 md:mt-0">
              <Button onClick={downloadResume}>
                Download Resume  
                <MdOutlineFileDownload />
              </Button>
            </div>
          </div>
            <div className="hidden w-full sm:w-1/2 md:flex lg:hidden justify-end items-center  relative">
            <Image 
            src={images.me}
             alt="Kawsar"
              width={240} 
              height={230} 
              
              />
          </div>
           </div>
           
          </div>
          <div className="hidden w-full  lg:w-1/2 lg:flex justify-end items-center mt-20 mb-10 relative">
            <Image src={images.me} alt="Kawsar" width={300} height={300} />
          </div>
        </div>
      </Container>
    </div>
  );
};



export default HeroSection;
