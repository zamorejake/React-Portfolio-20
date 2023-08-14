import Header from './Header';
import React, { useState } from 'react';
const Portfolio = () => {
    const [hovered, setHovered] = useState(false);

    const handleEnter = () => {
      setHovered(true)
    }

    const handleLeave = () => {
      setHovered(false)
    }

  return (
    <>
    <Header port="bg-gray-500" />
    <body className="h-screen flex flex-col px-1.5 items-center ">
      <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">Portfolio</h1>
      <div className="grid grid-cols-3 pt-12 gap-20">
      <img src="restaurant.jpg" alt="Profile Picture" width="300" height="300" onMouseEnter={handleEnter} onMouseLeave={handleLeave}/>
      <h3 className="absolute text-4xl font-bold text-white px-1.5">Yum's</h3>
      {hovered && (<a href='https://github.com/zamorejake' className="absolute pt-28" target="_blank" rel="noreferrer"><img src="github.png" alt="Github logo" width="75" height="75" onMouseEnter={handleEnter} onMouseLeave={handleLeave}/></a>)}
      {hovered && (<a href='https://yums-4103a315e67a.herokuapp.com/' className="absolute pt-28 pl-20" target="_blank" rel="noreferrer"><img src="deploy.png" alt="Deployment logo" width="75" height="75" onMouseEnter={handleEnter} onMouseLeave={handleLeave}/></a>)}
      <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
      <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
      <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
      <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
      <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
      </div>
    </body>
    </>
  );
};

export default Portfolio;
