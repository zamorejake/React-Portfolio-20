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
      <Header port="bg-gray-500" />
      <body className="h-screen flex flex-col px-1.5 items-center ">
        <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">
          Portfolio
        </h1>
        <div className="grid grid-cols-3 pt-2 gap-10">
          {projectData.map((projectData, index) => (
            <div
              key={index}
              className="relative pt-28"
              onMouseLeave={handleLeave}
              onMouseEnter={() => setHovered(index)}
            >
              <h3 className="absolute text-4xl font-extrabold text-rose-600 px-1.5">
                {projectData.title}
              </h3>
              <img
                src={projectData.image}
                alt={`Project ${index}`}
                width="300"
                height="300"
              />
              {hovered === index && (
                <div className="absolute top-0 left-0 pt-40">
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
      </body>
    </>
  );
};

export default Portfolio;
