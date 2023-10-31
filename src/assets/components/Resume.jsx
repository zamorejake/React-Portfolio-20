import React, { useState } from "react";
const Resume = () => {
  const [hovered, setHovered] = useState(false);

  const handleLeave = () => {
    setHovered(false);
  };
  const isGrid = window.innerWidth >= 768;

  const logoData = [
    {
      image: "icons/html.png",
      alt: "HTML Logo",
    },
    {
      image: "icons/css.png",
      alt: "CSS Logo",
    },
    {
      image: "icons/js.png",
      alt: "JavaScript Logo",
    },
    {
      image: "icons/node.png",
      alt: "Node.js Logo",
    },
    {
      image: "icons/react.png",
      alt: "React Logo",
    },
    {
      image: "icons/mysql.png",
      alt: "MySQL Logo",
    },
    {
      image: "icons/mongo.png",
      alt: "MongoDB Logo",
    },
    {
      image: "icons/express.png",
      alt: "Express.js Logo",
    },
  ];
  return (
    <>
      <div id="Resume" className="h-screen flex flex-col px-1.5 items-center">
        <h1 className="text-black text-bold font-bold text-5xl pt-48 lg:pt-28 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
          Resume
        </h1>
        <iframe
          className="pt-5"
          src="Resume.pdf"
          width={isGrid ? "600" : "400"}
          height="630"
        ></iframe>
        <h1 className="text-black text-bold font-bold text-4xl pt-28 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">Technical Skills</h1>
        <div className="grid grid-cols-4 gap-2.5 pb-12">
          {logoData.map((logoData, index) => (
            <div
              key={index}
              className="relative pt-14"
              onMouseLeave={handleLeave}
              onMouseEnter={() => setHovered(index)}
            >
              <img
                src={logoData.image}
                alt={logoData.alt}
                width="100"
                height="100"
                className={`image-container transform transition-transform ease-in-out duration-250 ${
                  hovered === index
                    ? "brightness-50 scale-110"
                    : "hover:brightness-50 hover:scale-110"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;
