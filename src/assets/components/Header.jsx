const Header = ({ onSectionClick }) => {
  return (
    <header className="fixed top-0 w-full h-24 px-5 flex items-center justify-between z-10">
      <div>
        <a href="#">
          <img className="pt-10" src="logo.png" alt="Github logo" width="300" height="300"/>
        </a>
      </div>
      <div>
        <ul className="flex text-white space-x-4 font-semibold">
          <li>
            <a
              href="#AboutMe"
              onClick={() => onSectionClick("default-state")}
              className="hover:font-black"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#Portfolio"
              onClick={() => onSectionClick("portfolio")}
              className="hover:font-black"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => onSectionClick("contact")}
              className="hover:font-black"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#Resume"
              onClick={() => onSectionClick("resume")}
              className="hover:font-black"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
