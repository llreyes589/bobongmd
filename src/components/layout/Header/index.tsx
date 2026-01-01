import { Menu, Microscope, X } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
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
            {[
              "home",
              "about",
              "gallery",
              "advocacies",
              "announcements",
              "portal",
            ].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`md:px-1 lg:px-3 py-2 rounded-md md:text-caption lg:text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? "bg-white text-primary-dark shadow-md"
                    : "hover:bg-primary-light"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
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
          {[
            "home",
            "about",
            "gallery",
            "advocacies",
            "announcements",
            "portal",
          ].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeSection === section
                  ? "bg-white text-primary-dark"
                  : "hover:bg-primary-main"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
