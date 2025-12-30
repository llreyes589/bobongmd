import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Download,
  Upload,
  Bell,
  Users,
  Microscope,
  Briefcase,
  Heart,
  BookOpen,
  ImageIcon,
  FileText,
  Calendar,
} from "lucide-react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Advocacies from "./pages/Advocacies";
import Announcements, { type AnnouncementProps } from "./pages/Announcements";
import Portal from "./pages/Portal";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [announcements, setAnnouncements] = useState<AnnouncementProps[]>([]);

  useEffect(() => {
    setAnnouncements([
      {
        id: 1,
        title: "Midterm Examination Schedule",
        date: "2024-01-15",
        section: "Section A",
      },
      {
        id: 2,
        title: "New Laboratory Protocols",
        date: "2024-01-14",
        section: "All Sections",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* floating portal quick action */}
      <button
        onClick={() => setActiveSection("portal")}
        aria-label="Open Portal"
        className="fixed right-6 bottom-6 z-50 bg-linear-to-br from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <Upload className="h-6 w-6" />
      </button>

      {activeSection === "home" && <Home />}
      {activeSection === "about" && <About />}
      {activeSection === "gallery" && <Gallery />}
      {activeSection === "advocacies" && <Advocacies />}
      {activeSection === "announcements" && (
        <Announcements announcements={announcements} />
      )}
      {activeSection === "portal" && <Portal announcements={announcements} />}

      <footer className="bg-linear-180 from-primary-light to-primary-main text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2026 BobongMD. All rights reserved.</p>
          <p className="text-secondary-dark">
            Dedicated to Excellence in Pathology Education & Practice
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
