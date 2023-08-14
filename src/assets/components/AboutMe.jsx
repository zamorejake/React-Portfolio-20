import Header from './Header';
const AboutMe = () => {
    return (
      <>
      <Header about="bg-gray-500" />
      <body className="h-screen flex flex-col px-1.5 items-center">
        <h1 className="text-gray-400 text-bold font-bold text-5xl pt-12">About Me</h1>
        <div className="flex-shrink-0 pt-5">
        <img src="pfp.png" alt="Profile Picture" width="200" height="200"/>
        </div>
        <p className="pt-12 px-14 text-3xl">Welcome to my corner of the web! I'm Jake Zam, a passionate MERN fullstack developer on a journey to create innovative and immersive digital experiences. With a strong foundation in MongoDB, Express, React, and Node.js, I thrive in crafting dynamic and responsive web applications that not only meet, but exceed expectations.
        I've been fascinated with technology at an early age and would do my best to mess around with it to see how it all worked.
        That drive has stuck with me and since then I've built many computers, set up my own server for home use, and deployed my own home network with multiple access points and VLAN segmenting.
        Since then I have really been emersed in web development and plan to continue and grow as new technologies arrive!
        </p>
     </body>
      </>
    );
  };
  
  export default AboutMe;
  