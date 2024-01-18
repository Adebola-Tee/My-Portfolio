import React from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className=" bg-[url()] lg:bg-[url(/bg-img.jpg)] bg-no-repeat min-h-screen ">
      <Navbar />
      <div className="container lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="md:text-[100px]  text-[60px] font-bold leading-tight flex justify-center mx-auto md:justify-end items-center  ">
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p className="text-green-500" data-aos="zoom-in-left">
              Taiwo
            </p>
            <p data-aos="zoom-in-right">Oloyede</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
