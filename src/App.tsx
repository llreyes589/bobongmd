import { useEffect, useState } from "react";
import { Upload } from "lucide-react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Advocacies from "./pages/Advocacies";
import Announcements, { type AnnouncementProps } from "./pages/Announcements";
import Portal from "./pages/Portal";
import Footer from "./components/layout/Footer";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router";

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
    <div className="h-screen bg-white flex flex-col">
      {/* floating portal quick action */}
      <button
        onClick={() => setActiveSection("portal")}
        aria-label="Open Portal"
        className="fixed right-6 bottom-6 z-50 bg-linear-to-br from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <Upload className="h-6 w-6" />
      </button>

      <div className="flex-1 ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/advocacies" element={<Advocacies />} />
            <Route
              path="/announcements"
              element={<Announcements announcements={announcements} />}
            />
            <Route
              path="/portal"
              element={<Portal announcements={announcements} />}
            />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
};

export default App;
