import { ImageIcon } from "lucide-react";
import PageTemplate from "../../components/layout/template/PageTemplate";

const Gallery = () => (
  <PageTemplate>
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
      Gallery
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-400 transform hover:-translate-y-2"
        >
          <div
            className={`h-64 flex items-center justify-center bg-linear-to-br from-blue-400 to-teal-400`}
          >
            <div className="h-full w-full flex items-center justify-center relative">
              <div className="absolute inset-6 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <ImageIcon className="h-20 w-20 text-white/90" />
              </div>
            </div>
          </div>
          <div className="absolute left-4 top-4 px-3 py-1 bg-white/30 text-white text-sm rounded-full backdrop-blur-sm">
            Gallery {i}
          </div>
        </div>
      ))}
    </div>
  </PageTemplate>
);

export default Gallery;
