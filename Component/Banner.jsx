import React from 'react';
import BG1 from '../assets/banner2.webp'
import BG2 from '../assets/banner1.webp'
import BG3 from '../assets/banner1.jpg'
import BG4 from '../assets/Banner5.png'
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='lg:pl-60 lg:pr-60'>
            <div className="carousel w-full mx-auto lg:mt-10 lg:mb-10 lg:rounded-2xl m-4 ">
  <div id="slide1" className="carousel-item relative w-full">
  <img src={BG1} className="w-full object-cover" />
  

  <div className="absolute top-1/3 left-10 text-black space-y-4 z-10  lg:pl-20">
    <h2 className="lg:text-3xl font-bold">
  Welcome to{' '}
  <span className="text-[#006838]">
    <Typewriter
      words={['GardenTribe', 'Green Community', 'Plant Lovers']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2>
    <p className=" ">Join our community of plant lovers</p>
    <button className="btn mb-5 bg-[#006838] text-white">Learn More</button>
  </div>

 
  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide4" className="btn btn-circle ">❮</a>
    <a href="#slide2" className="btn btn-circle ">❯</a>
  </div>
</div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
    src={BG2}
      className="w-full" />
      <div className="absolute top-1/3 left-10 text-black space-y-4 z-10 lg:pl-20">
    <h2 className="lg:text-3xl font-bold">
  Welcome to{' '}
  <span className="text-[#006838]">
    <Typewriter
      words={['GardenTribe', 'Green Community', 'Plant Trees']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2>
    <p className="text-lg md:text-xl">Join our community of plant lovers</p>
    <button className="btn mb-5 bg-[#006838] text-white">Learn More</button>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={BG3}
      className="w-full" />
      <div className="absolute top-1/3 left-10 text-black space-y-4 z-10 lg:pl-20 ">
    <h2 className="lg:text-3xl font-bold">
  Welcome to{' '}
  <span className="text-[#006838]">
    <Typewriter
      words={['GardenTribe', 'Green Community', 'Plant Lovers']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2>
    <p className="text-lg md:text-xl">Join our community of plant lovers</p>
    <button className="btn mb-5  bg-[#006838] text-white">Learn More</button>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={BG4}
      className="w-full" />
      <div className="absolute top-1/3 left-10 text-black space-y-4 z-10 lg:pl-20">
    <h2 className="lg:text-3xl font-bold">
  Welcome to{' '}
  <span className="text-[#006838]">
    <Typewriter
      words={['GardenTribe', 'Green Community', 'Plant Lovers']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h2>
    <p className=" md:text-xl">Join our community of plant lovers</p>
    <button className="btn mb-10  bg-[#006838] text-white">Learn More</button>
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle ">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;