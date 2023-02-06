import React from "react";
import portfolios from "@/utils/portfolioData";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className=" relative py-5 md:py-3">
      <div className="portfolio-container">
        <div className=" flex items-center justify-center">
          <h1 className=" text-5xl md:text-4xl  font-bold font-burtons text-gray-900 filter drop-shadow-lg">
            My Portfolio
          </h1>
        </div>
        <div className=" grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-5 py-8 md:py-4">
          {portfolios.map((portfolio) => {
            const { id, img, link } = portfolio;
            return (
              <div
                key={id}
                className=" flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <a href={link}>
                  <Image
                    src={img}
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    alt="Jobs done"
                    className=" rounded-lg object-cover"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
