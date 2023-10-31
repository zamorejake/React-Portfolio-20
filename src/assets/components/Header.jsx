const Header = ({ onSectionClick }) => {
  return (
    <header className="fixed top-0 w-full px-5 py-3 lg:py-0 flex flex-col lg:flex-row items-center justify-between z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      <div>
        <a href="#">
          <img
            className="pt-2 lg:pt-0"
            src="logo.png"
            alt="My logo"
            width="300"
            height="300"
          />
        </a>
      </div>
      <div className="lg:text-xl lg:flex lg:items-center lg:w-auto mt-3 lg:mt-0">
        <ul className="flex text-white space-x-4 font-semibold lg:flex-row lg:space-x-4">
          <li>
            <a
              href="#AboutMe"
              onClick={() => onSectionClick("about-me")}
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
