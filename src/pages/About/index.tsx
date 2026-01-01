import { BookOpen, Microscope, Users } from "lucide-react";

const About = () => (
  <>
    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
      Brief Information
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <Microscope className="h-12 w-12 text-teal-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pathologist</h3>
        <p className="text-gray-600 leading-relaxed">
          Board-certified pathologist specializing in anatomic and clinical
          pathology with over 15 years of experience in diagnostic medicine and
          laboratory management.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Anatomic Pathology
          </span>
          <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
            Clinical Pathology
          </span>
        </div>
      </div>
      <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Professor</h3>
        <p className="text-gray-600 leading-relaxed">
          Dedicated educator at leading medical institutions in the Philippines,
          mentoring the next generation of healthcare professionals in pathology
          and laboratory medicine.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
            Medical Education
          </span>
          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
            Research
          </span>
        </div>
      </div>
      <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <Users className="h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
        <p className="text-gray-600 leading-relaxed">
          Based in the Philippines, serving the medical community through
          clinical practice, education, and research collaboration with national
          and international institutions.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 bg-yellow-50 text-yellow-800 rounded-full text-sm">
            Philippines
          </span>
        </div>
      </div>
    </div>
  </>
);

export default About;
