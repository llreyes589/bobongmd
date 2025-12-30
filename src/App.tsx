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

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [portalView, setPortalView] = useState("overview");
  const [submissions, setSubmissions] = useState<any>([]);
  const [announcements, setAnnouncements] = useState<any>([]);

  const handleFileUpload = (e: any, type: any) => {
    const file = e.target.files[0];
    if (file) {
      const newSubmission = {
        id: Date.now(),
        fileName: file.name,
        type: type,
        uploadDate: new Date().toLocaleDateString(),
        status: "Pending Review",
      };
      setSubmissions([...submissions, newSubmission]);
      alert(`${type} uploaded successfully!`);
    }
  };

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

  const resources = [
    {
      id: 1,
      name: "Histopathology Guide.pdf",
      size: "2.4 MB",
      date: "2024-01-10",
    },
    {
      id: 2,
      name: "Blood Smear Analysis.pdf",
      size: "1.8 MB",
      date: "2024-01-08",
    },
    {
      id: 3,
      name: "Laboratory Protocols.pdf",
      size: "3.2 MB",
      date: "2024-01-05",
    },
  ];

  const Advocacies = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Advocacies & Interests
      </h2>
      <div className="space-y-8">
        <div className="bg-linear-to-r from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start space-x-4">
            <Microscope className="h-12 w-12 text-teal-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Medical Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Committed to advancing diagnostic pathology through continuous
                learning, research, and implementation of cutting-edge
                laboratory techniques. Passionate about accurate diagnoses that
                improve patient outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start space-x-4">
            <Briefcase className="h-12 w-12 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Business Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Entrepreneurial healthcare professional with expertise in
                laboratory management and medical business operations. Building
                sustainable healthcare enterprises that serve communities
                effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-green-50 to-teal-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start space-x-4">
            <Heart className="h-12 w-12 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Life Coaching & Mentorship
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dedicated to empowering individuals in their personal and
                professional journeys. Providing guidance on career development,
                work-life balance, and achieving personal goals in the medical
                field and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Announcements = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Announcements
        </h2>
        <div className="space-y-6">
          {announcements.map((announcement: any) => (
            <div
              key={announcement.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-teal-600"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Bell className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Section: {announcement.section}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {announcement.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Portal = () => (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Student Portal
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { id: "overview", label: "Overview", icon: Users },
            { id: "download", label: "Resources", icon: Download },
            { id: "submit", label: "Submit Work", icon: Upload },
            { id: "submissions", label: "My Submissions", icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPortalView(tab.id)}
              className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                portalView === tab.id
                  ? "bg-linear-to-r from-blue-600 to-teal-600 text-white shadow-2xl scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {portalView === "overview" && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Download className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Available Resources
              </h3>
              <p className="text-4xl font-bold text-teal-600">
                {resources.length}
              </p>
              <p className="text-gray-600 mt-2">
                PDF documents ready for download
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Upload className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Your Submissions
              </h3>
              <p className="text-4xl font-bold text-blue-600">
                {submissions.length}
              </p>
              <p className="text-gray-600 mt-2">
                Documents submitted for review
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Bell className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                New Announcements
              </h3>
              <p className="text-4xl font-bold text-green-600">
                {announcements.length}
              </p>
              <p className="text-gray-600 mt-2">Updates from your professor</p>
            </div>
          </div>
        )}

        {portalView === "download" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Available Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-red-500" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {resource.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {resource.size} • {resource.date}
                      </p>
                    </div>
                  </div>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {portalView === "submit" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Submit Your Work
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-500 transition-colors bg-white/70 backdrop-blur-sm">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Upload Document
                </h4>
                <p className="text-gray-600 mb-4">PDF, DOC, DOCX (Max 10MB)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload(e, "Document")}
                  className="hidden"
                  id="doc-upload"
                />
                <label
                  htmlFor="doc-upload"
                  className="bg-linear-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:opacity-95 transition-opacity cursor-pointer inline-block"
                >
                  Choose File
                </label>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors bg-white/70 backdrop-blur-sm">
                <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Upload Blood Smear
                </h4>
                <p className="text-gray-600 mb-4">JPG, PNG (Max 5MB)</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "Blood Smear")}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="bg-linear-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full hover:opacity-95 transition-opacity cursor-pointer inline-block"
                >
                  Choose Image
                </label>
              </div>
            </div>
          </div>
        )}

        {portalView === "submissions" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Submissions
            </h3>
            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  No submissions yet. Upload your work to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission: any) => (
                  <div
                    key={submission.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      {submission.type === "Blood Smear" ? (
                        <ImageIcon className="h-8 w-8 text-blue-500" />
                      ) : (
                        <FileText className="h-8 w-8 text-teal-500" />
                      )}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {submission.fileName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {submission.type} • {submission.uploadDate}
                        </p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {submission.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

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
      {activeSection === "announcements" && <Announcements />}
      {activeSection === "portal" && <Portal />}

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
