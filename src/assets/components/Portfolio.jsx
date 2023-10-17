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

  const isGrid = window.innerWidth >= 768;

  const projectData = [
    {
      image: "restaurant.png",
      title: "Yum's",
      github: "https://github.com/zamorejake/YumYumYard",
      deployment: "https://yums-4103a315e67a.herokuapp.com/",
      info: "Yum's is a restaurant management system. Technologies used include Node.js, Express.js, MongoDB, and EJS templating.",
    },
    {
      image: "weather.png",
      title: "Weather App",
      github: "https://github.com/zamorejake/06-weather-dashboard",
      deployment: "https://zamorejake.github.io/06-weather-dashboard/",
      info: "A weather dashboard that provides current weather conditions and forecasts. Built with HTML, CSS, JavaScript, and utilizes the OpenWeatherMap API.",
    },
    {
      image: "park.jpg",
      title: "Park Locator",
      github: "https://github.com/zamorejake/US-ParkLocator",
      deployment: "https://zamorejake.github.io/US-ParkLocator/",
      info: "Park Locator helps users find information about parks in the United States. Developed using HTML, CSS, JavaScript, and the National Park Service API.",
    },
    {
      image: "calendar.png",
      title: "Calendar App",
      github: "https://github.com/zamorejake/05-dayJS-calendar",
      deployment: "https://zamorejake.github.io/05-dayJS-calendar/",
      info: "A simple calendar app with day planning features. Built using HTML, CSS, JavaScript, and the Day.js library.",
    },
    {
      image: "password.png",
      title: "Password Generator",
      github: "https://github.com/zamorejake/03-passwordGenerator",
      deployment: "https://zamorejake.github.io/03-passwordGenerator/",
      info: "Password Generator creates secure passwords with customizable options. Implemented using HTML, CSS, and JavaScript.",
    },
    {
      image: "quiz.png",
      title: "Quiz App",
      github: "https://github.com/zamorejake/04-JSquiz",
      deployment: "https://zamorejake.github.io/04-JSquiz/",
      info: "A JavaScript quiz application with multiple-choice questions. Developed with HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <>
      <div
        id="Portfolio"
        className="h-screen flex flex-col px-1.5 items-center"
      >
        <h1 className="text-black text-bold font-bold text-5xl pt-48 lg:pt-28 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
          Portfolio
        </h1>
        <a href="Resume.pdf" target="_blank" rel="noreferrer">
          <h2 className="pt-3 sm:pb-2 lg: pb-1 text-2xl underline font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Interested in my resume?
          </h2>
        </a>
        <div
          className={
            isGrid
              ? "grid lg:grid-cols-3 gap-10"
              : "flex flex-wrap gap-10 overflow-y-auto"
          }
        >
          {projectData.map((projectData, index) => (
            <div
              key={index}
              className={
                isGrid
                  ? "pt-14 relative"
                  : "w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative overflow-hidden"
              }
              onMouseLeave={handleLeave}
              onMouseEnter={() => setHovered(index)}
            >
              <h3 className="absolute text-4xl font-extrabold text-white px-1.5 z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {projectData.title}
              </h3>
              <img
                src={projectData.image}
                alt={`Project ${index}`}
                className={
                  isGrid
                    ? `max-w-[300px] w-full h-auto rounded-lg shadow-lg ${
                        hovered === index
                          ? "brightness-50 scale-110"
                          : "hover:brightness-50 hover:scale-110"
                      }`
                    : `w-full h-auto rounded-lg shadow-lg ${
                        hovered === index
                          ? "brightness-50 scale-110"
                          : "hover:brightness-50 hover:scale-110"
                      }`
                }
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
                  <p className="text-white text-lg absolute top-10 left-20 pt-16 w-56 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {projectData.info}
                  </p>
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
