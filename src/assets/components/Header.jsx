const Header = ({ about, port, con, res }) => {
  return (
    <header className="flex items-center justify-between h-24 px-5">
      <div>
      <h1 className="text-6xl text-white font-bold">Jake Zam</h1>
      </div>
      <div>
        <ul className="flex space-x-4 font-semibold">
          <a href="/AboutMe" className={`basis-40 ${about}`}> <li className="hover:font-black">About Me</li></a>
          <a href="/Portfolio" ><li className={`basis-20 hover:font-black ${port}`}>Portfolio</li></a>
          <a href="/Contact" ><li className={`basis-20 hover:font-black ${con}`}>Contact</li></a>
          <a href="/Resume" ><li className={`basis-20 hover:font-black ${res}`}>Resume</li></a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
