import { Briefcase, Heart, Microscope } from "lucide-react";

const Advocacies = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
      Advocacies & Interests
    </h2>
    <div className="space-y-8">
      <div className="bg-linear-to-r from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
          <Microscope className="h-12 w-12 text-teal-600 shrink-0" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Medical Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Committed to advancing diagnostic pathology through continuous
              learning, research, and implementation of cutting-edge laboratory
              techniques. Passionate about accurate diagnoses that improve
              patient outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
          <Briefcase className="h-12 w-12 text-blue-600 shrink-0" />
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
          <Heart className="h-12 w-12 text-green-600 shrink-0" />
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

export default Advocacies;
