import { Link } from 'react-router-dom';
const Header = ({ about, port, con, res }) => {
  return (
    <header className="flex items-center justify-between h-24 px-5">
      <div>
      <h1 className="text-6xl text-white font-bold">Jake Zam</h1>
      </div>
      <div>
        <ul className="flex text-white space-x-4 font-semibold">
          <Link to="/AboutMe" className={`basis-40 ${about}`}> <li className="hover:font-black">About Me</li></Link>
          <Link to="/Portfolio" ><li className={`basis-20 hover:font-black ${port}`}>Portfolio</li></Link>
          <Link to="/Contact" ><li className={`basis-20 hover:font-black ${con}`}>Contact</li></Link>
          <Link to="/Resume" ><li className={`basis-20 hover:font-black ${res}`}>Resume</li></Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
