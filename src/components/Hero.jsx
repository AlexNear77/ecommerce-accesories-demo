import React from "react";
import { Link } from "react-router-dom";
//Import Images
import WomanImg from "../img/heroLineas.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* Text */}
        <div className="flex flex-col justify-center">
          {/* Pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Lo más nuevo
          </div>
          {/* Title */}
          <h1 className="text-[70px] leading-[1.1] font-mistic">
            MISTIC COL <br />
          </h1>
          <span className="font-semibold text-[70px] leading-[1.1] mb-4">
            Accesorios
          </span>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-primary"
            to={"/"}
          >
            Descubre mas
          </Link>
        </div>
        {/* Image */}
        <div className="hidden lg:block ">
          <img src={WomanImg} alt="Accesorios" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
