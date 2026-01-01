import {
  Download,
  Upload,
  Bell,
  Users,
  ImageIcon,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import type { AnnouncementProps } from "../Announcements";
import PageTemplate from "../../components/layout/template/PageTemplate";

type PortalViewProps = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type ResourceProps = {
  id: number;
  name: string;
  size: string;
  date: string;
};

const portalViewData: PortalViewProps[] = [
  { id: "overview", label: "Overview", icon: Users },
  { id: "download", label: "Resources", icon: Download },
  { id: "submit", label: "Submit Work", icon: Upload },
  { id: "submissions", label: "My Submissions", icon: FileText },
];

const resources: ResourceProps[] = [
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

const Portal = ({ announcements }: { announcements: AnnouncementProps[] }) => {
  const [submissions, setSubmissions] = useState<any>([]);

  const [portalView, setPortalView] = useState("overview");

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
  return (
    <PageTemplate>
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Student Portal
      </h2>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {portalViewData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setPortalView(tab.id)}
            className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              portalView === tab.id
                ? "text-primary-light bg-secondary-main shadow-2xl scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow"
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span> {tab.label}</span>
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
            <p className="text-gray-600 mt-2">Documents submitted for review</p>
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
                className="flex items-center md:justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors xs:flex-col md:flex-row"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-primary-dark" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {resource.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {resource.size} • {resource.date}
                    </p>
                  </div>
                </div>
                <button className="bg-primary-light text-secondary-main px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
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
          <div className="grid md:grid-cols-1 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-500 transition-colors bg-white/70 backdrop-blur-sm">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Upload Document
              </h4>
              <p className="text-gray-600 mb-4">
                JPG, PNG, PDF, DOC, DOCX (Max 2MB)
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,,png"
                onChange={(e) => handleFileUpload(e, "Document")}
                className="hidden"
                id="doc-upload"
              />
              <label
                htmlFor="doc-upload"
                className="bg-primary-light text-secondary-main px-6 py-2 rounded-full hover:opacity-95 transition-opacity cursor-pointer inline-block"
              >
                Choose File
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
    </PageTemplate>
  );
};

export default Portal;
