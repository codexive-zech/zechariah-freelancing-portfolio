import React from "react";
import Image from "next/image";
import services from "../utils/serviceData";

const Services = () => {
  return (
    <div className=" relative py-10 md:py-8">
      <div className="portfolio-container">
        <div className=" flex-col items-center justify-center text-center">
          <h1 className=" text-5xl md:text-4xl  font-bold font-burtons text-gray-900 filter drop-shadow-lg">
            Services
          </h1>
          <p className=" py-6 md:py-4 font-normal text-md md:text-sm w-full max-w-4xl lg:max-w-none mx-auto leading-8 text-gray-800 filter drop-shadow-lg">
            Since the beginning of my journey as a Web Developer, and a Content
            Writer, i have worked alongside Small and Medium Businesses to help
            them developed friendly responsive UI, fast speed website and
            converting content for their business in other to improve their
            online presence and faster discovery. I have collaborated with
            talented minds to create digital products for both business and
            customer use.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 items-center justify-center py-5 lg:py-4 md:py-3">
          {services.map((service) => {
            const { id, img, title, text } = service;
            return (
              <div
                className="flex-col items-center justify-center mx-5 lg:mx-2 shadow-lg rounded-lg shadow-gray-400 p-3 md:my-4"
                key={id}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={img}
                    alt="hello"
                    className="w-32 h-32 md:w-24 md:h-24 object-fill"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl md:text-lg font-bold filter drop-shadow-md py-3">
                    {title}
                  </h2>
                  <p className="leading-8 text-lg md:text-sm">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
