import Header from "./Header";
import React, { useState } from "react";
const Portfolio = () => {
  const [hovered, setHovered] = useState(false);

  const handleLeave = () => {
    setHovered(false);
  };

  const isGrid = window.innerWidth >= 768;

  const projectData = [
    {
      image: "restaurant.png",
      title: "Yum's",
      github: "https://github.com/zamorejake/Yums",
      deployment: "https://yums2-3c8c929ea654.herokuapp.com/",
      info: "Yum's is a restaurant management system built using React, Node.js, Express.js, and MongoDB.",
    },
    {
      image: "blog.png",
      title: "Tech Blog",
      github: "https://github.com/zamorejake/14-MVC-techblog",
      deployment: "#",
      info: "A blog application using the Model-View-Controller (MVC) pattern for managing and presenting technical blog posts.",
    },
    {
      image: "employee.png",
      title: "Employee App",
      github: "https://github.com/zamorejake/12-EmployeeSQL",
      deployment: "#",
      info: "An Employee Management App using SQL for data storage and manipulation.",
    },
    {
      image: "nosql.png",
      title: "Social API",
      github: "https://github.com/zamorejake/18-NoSQL-SocialAPI",
      deployment: "https://www.youtube.com/watch?v=xYNdVIU07TE&ab_channel=JZ",
      info: "A NoSQL Social API to store all info related to the users credentials and posts they made including reactions. Technologies include MongoDB.",
    },
    {
      image: "book.png",
      title: "Book Finder",
      github: "https://github.com/zamorejake/21-BookSearch",
      deployment: "https://book-engine-mern-21-5febe54c7a0c.herokuapp.com/",
      info: "This project leverages GraphQL, React, Apollo, and MongoDB to create a platform for discovering and searching for books.",
    },
    {
      image: "portfolio.png",
      title: "Portfolio",
      github: "https://github.com/zamorejake/React-Portfolio-20",
      deployment: "https://jakezam.dev/",
      info: "My portfolio website built with React and Tailwind to showcase my projects, good Github practices, and contact info.",
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
