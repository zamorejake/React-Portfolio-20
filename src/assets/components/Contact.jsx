import { useState } from "react";
import Header from "./Header";
const Contact = () => {
  
  return (
    <>
    <div className="h-screen flex flex-col px-1.5 items-center">
    <h1 id="Contact" className="text-black text-bold font-bold text-5xl pt-28 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">Contact Me</h1>
      <div className="flex justify-center items-center gap-3 pt-16">
      <a href='mailto:jakezam.dev@gmail.com' target="_blank" rel="noreferrer"><img src="email.png" alt="Email logo" width="100" height="100"/></a>
      <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer"><img src="linked.png" alt="Linkedin logo" width="100" height="100"/></a>
      {/*<a href='https://github.com/zamorejake' target="_blank" rel="noreferrer"><img src="github.png" alt="Github logo" width="100" height="100"/></a>*/}
      </div>
      </div>
    </>
  );
};

export default Contact;
