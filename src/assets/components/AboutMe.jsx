import React from "react";
import TypeItText from "./TypeIt";
const isGrid = window.innerWidth >= 768;
const AboutMe = ({ onSectionClick }) => {
  return (
    <>
      <div id="AboutMe" className="h-screen flex flex-col px-1.5 items-center">
        <h1 className="text-black text-bold font-bold text-5xl pt-48 lg:pt-28 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
          About Me
        </h1>

        <div className="flex-shrink-0 pt-5">
          <img src="pfp.png" alt="Profile Picture" width={isGrid ? "258" : "179"} height="358" />
        </div>
        <a
          href="#Portfolio"
          onClick={() => onSectionClick("portfolio")}
          className="hover:font-black"
        >
          <div className="pt-6 items-center px-14 text-[23px] lg:text-3xl text-black font-bold hover:font-extrabold drop-shadow-[0_3px_3px_rgba(255,255,255,0.8)]">
            <TypeItText />
          </div>
        </a>
        <div className="flex justify-center h-screen">
          <p className="text-center text-[23.5px] lg:text-3xl font-bold text-white px-6 max-w-screen-md mx-auto pt-6 px-14 mb-4 sm:mb-8 lg:mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,.8)]">
            My name is Jake Zamarripa and I'm a web developer based in the KC
            metro area. I'm passionate about coding and work well in team-oriented
            environments as well as individually. I am excited to contribute
            my skills and creativity to drive success in future projects!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
