import Header from './Header';
const Portfolio = () => {
  return (
    <>
    <Header port="bg-gray-500" />
    <body className="h-screen flex flex-col px-1.5 items-center ">
      <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">Portfolio</h1>
      <div className="grid grid-cols-3 pt-12 gap-20">
      <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
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
