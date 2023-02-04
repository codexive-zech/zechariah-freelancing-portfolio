import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" relative py-10 md:py-8">
      <div className=" portfolio-container">
        <div className=" text-left lg:text-center">
          <div className=" flex items-center justify-between gap-3 lg:flex-col-reverse">
            <div className=" w-full max-w-3xl lg:max-w-none ">
              <h2 className=" text-5xl lg:text-4xl md:text-3xl font-bold filter text-shadow-md text-teal-500 font-burtons py-2">
                <span className=" visible lg:hidden">Hi, I am</span> Zechariah
                Hounwanou
              </h2>
              <h3 className=" text-3xl md:text-2xl sm:text-xl font-medium  py-2">
                Frontend Developer & Content Writer
              </h3>
              <p className="leading-8 text-lg md:text-md py-2 text-gray-800 drop-shadow-lg">
                I am a Freelance Frontend Developer and Content Writer currently
                based in Nigeria. I am focused in helping Small and Medium
                Businesses Launch and Grow their Products. Turing Ideas into
                real life product is my calling.
              </p>
              <div className=" flex items-center justify-start lg:justify-center py-2 ">
                <ul className=" flex items-center justify-between gap-4 md:gap-6 text-4xl md:text-3xl  text-gray-600 drop-shadow-md ">
                  <li className="cursor-pointer">
                    <AiFillTwitterCircle />
                  </li>
                  <li className="cursor-pointer">
                    <AiFillLinkedin />
                  </li>
                  <li className="cursor-pointer">
                    <AiFillInstagram />
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-96 h-96 md:w-72 md:h-72 sm:w-60 sm:h-60 mx-auto bg-gradient-to-b bg-teal-500 rounded-full overflow-hidden">
              <Image
                src="/images/3d-zech-wave.png"
                layout="fill"
                objectFit="cover"
                alt="hello"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
