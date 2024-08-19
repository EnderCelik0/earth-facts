import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { planets } from "../constants.js";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav className="border-b border-b-white border-opacity-20 text-white">
      <div className="flex items-center justify-between p-6">
        <div>
          <Link
            to="/"
            className="font-antonio text-[1.75rem] font-medium tracking-[-1.05px] opacity-100"
          >
            THE PLANETS
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="relative z-50 text-white">
            {!isMenuOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "fixed" : "hidden"
          } inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden`}
          onClick={toggleMenu}
        ></div>
        <ul
          className={`md:flex md:gap-8 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed right-0 top-0 z-50 h-screen w-full max-w-xs flex-col items-start bg-rich-black bg-opacity-50 p-6 backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out md:relative md:h-auto md:w-auto md:max-w-none md:translate-x-0 md:flex-row md:bg-transparent md:p-0 md:pt-0 md:backdrop-filter-none`}
        >
          <div
            className="flex w-full cursor-pointer items-end"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></svg>
          </div>
          {planets.map((planet, index) => (
            <li
              key={index}
              className="py-4 font-spartan text-spartan-md font-semibold tracking-[1px] md:py-0"
            >
              <Link
                to={`/planet/${planet}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {planet.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
