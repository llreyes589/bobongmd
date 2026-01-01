import { Bell, Calendar } from "lucide-react";
import PageTemplate from "../../components/layout/template/PageTemplate";

export type AnnouncementProps = {
  id: number;
  title: string;
  date: string;
  section: string;
};

const Announcements = ({
  announcements,
}: {
  announcements: AnnouncementProps[];
}) => (
  <PageTemplate>
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
  </PageTemplate>
);

export default Announcements;
