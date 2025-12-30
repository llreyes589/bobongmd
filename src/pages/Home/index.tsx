import dp from "../../assets/dp.png";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-16 xs:pt-3">
      {/* decorative blobs */}
      <svg
        className="absolute -left-32 -top-40 opacity-30"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="210" cy="210" r="210" fill="url(#g1)" />
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="1" stopColor="#F0CB46" />
          </linearGradient>
        </defs>
      </svg>

      <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-main via-primary-light to-secondary-main">
              Advancing Medical Science
            </span>
            <div className="xs:text-lg md:text-3xl font-medium text-primary-light mt-2">
              Pathology • Teaching • Mentorship
            </div>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Dr. Bobong is a pathologist and professor based in the Philippines —
            combining clinical expertise, research, and entrepreneurship to
            educate future healthcare leaders.
          </p>

          <div className="flex md:gap-4 my-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md w-40">
              <div className="xs:text-xs md:text-sm text-gray-500">
                Years in Practice
              </div>
              <div className="text-2xl font-bold text-blue-700">15+</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md w-40">
              <div className="xs:text-xs md:text-sm text-gray-500">
                Publications
              </div>
              <div className="text-2xl font-bold text-teal-700">32</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md w-40">
              <div className="xs:text-xs md:text-sm text-gray-500">
                Students Mentored
              </div>
              <div className="text-2xl font-bold text-green-700">120+</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="h-64 sm:h-80 md:h-96  flex items-center justify-center">
              <img
                src={dp}
                alt="Dr. Bobong"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="text-gray-700 font-semibold">
                Dr. Pedrito Y. Tagayuna, MD, FPSP
              </div>
              <div className="text-sm text-gray-500">
                Pathology • Professor • Mentorship
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
