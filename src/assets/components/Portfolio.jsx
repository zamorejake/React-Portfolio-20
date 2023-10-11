import Header from "./Header";
import React, { useState } from "react";
const Portfolio = () => {
  const [hovered, setHovered] = useState(false);

  const handleEnter = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const projectData = [
    {
      image: "restaurant.png",
      title: "Yum's",
      github: "https://github.com/zamorejake/YumYumYard",
      deployment: "https://yums-4103a315e67a.herokuapp.com/",
    },
    {
      image: "weather.png",
      title: "Weather App",
      github: "https://github.com/zamorejake/06-weather-dashboard",
      deployment: "https://zamorejake.github.io/06-weather-dashboard/",
    },
    {
      image: "park.jpg",
      title: "Park Locator",
      github: "https://github.com/zamorejake/US-ParkLocator",
      deployment: "https://zamorejake.github.io/US-ParkLocator/",
    },
    {
      image: "calendar.png",
      title: "Calendar App",
      github: "https://github.com/zamorejake/05-dayJS-calendar",
      deployment: "https://zamorejake.github.io/05-dayJS-calendar/",
    },
    {
      image: "password.png",
      title: "Password Generator",
      github: "https://github.com/zamorejake/03-passwordGenerator",
      deployment: "https://zamorejake.github.io/03-passwordGenerator/",
    },
    {
      image: "quiz.png",
      title: "Quiz App",
      github: "https://github.com/zamorejake/04-JSquiz",
      deployment: "https://zamorejake.github.io/04-JSquiz/",
    },
  ];

  return (
    <>
      <div id="Portfolio" className="h-screen flex flex-col px-1.5 items-center">
        <h1 className="text-black text-bold font-bold text-5xl pt-28">
          Portfolio
        </h1>
        <div className="grid grid-cols-3 pt-2 gap-10">
          {projectData.map((projectData, index) => (
            <div
              key={index}
              className="relative pt-14"
              onMouseLeave={handleLeave}
              onMouseEnter={() => setHovered(index)}
            >
              <h3 className="absolute text-4xl font-extrabold text-white px-1.5 z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {projectData.title}
              </h3>
              <img
                src={projectData.image}
                alt={`Project ${index}`}
                width="300"
                height="300"
                className="hover:scale-110 rounded-lg shadow-lg hover:brightness-50"
              />
              {hovered === index && (
                <div className="absolute top-0 left-0 pt-32">
                  <a href={projectData.github} target="_blank" rel="noreferrer">
                    <img
                      src="github2.png"
                      alt="Github logo"
                      width="75"
                      height="75"
                      onMouseEnter={() => setHovered(index)}
                    />
                  </a>
                  <a
                    href={projectData.deployment}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="deploy.png"
                      alt="Deployment logo"
                      width="75"
                      height="75"
                      onMouseEnter={() => setHovered(index)}
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
