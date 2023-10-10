import React from 'react';
const AboutMe = () => {
  
    return (
      <>
      <div id="AboutMe" className="h-screen flex flex-col px-1.5 items-center">
        <h1 className="text-black text-bold font-bold text-5xl pt-28">About Me</h1>
        <div className="flex-shrink-0 pt-5">
        <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
        </div>
        <p className="pt-12 px-14 text-3xl text-white">Text
        </p>
     </div>
      </>
    );
  };
  
  export default AboutMe;
  