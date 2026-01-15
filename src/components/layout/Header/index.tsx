import { Menu, Microscope, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const navMenu = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Advocacies", link: "/advocacies" },
  { title: "Announcements", link: "/announcements" },
  { title: "Portal", link: "/portal" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r bg-primary-main text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-r bg-secondary-dark flex items-center justify-center shadow-md">
              <Microscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl">BobongMD</span>
              <div className="text-xs text-teal-200">
                Pathology • Education • Mentorship
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navMenu.map(({ title, link }) => (
              <NavLink
                to={link}
                key={title}
                onClick={() => setActiveSection(title)}
                className={`md:px-1 lg:px-3 py-2 rounded-md md:text-caption lg:text-sm font-medium transition-all duration-300 ${
                  activeSection === title
                    ? "bg-white text-primary-dark shadow-md"
                    : "hover:bg-primary-light"
                }`}
              >
                {title}
              </NavLink>
            ))}
          </div>

          {/* mobile menu button - visible only on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-teal-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-main px-4 py-3 space-y-2 ">
          {navMenu.map(({ title, link }) => (
            <NavLink
              to={link}
              key={title}
              onClick={() => {
                setActiveSection(title);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === title
                  ? "bg-white text-primary-dark"
                  : "hover:bg-primary-main"
              }`}
            >
              {title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
