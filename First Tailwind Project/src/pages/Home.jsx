import Logo from "../components/Logo";
import MeetingScheduleCard from "../components/MeetingScheduleCard";
import ProfileCard from "../components/ProfileCard";
import Sidebar from "../components/Sidebar";
import SidebarOptions from "../components/SidebarOptions";
import Timeline from "../components/Timeline";

function HomePage() {
  return (
    <div className="font-popins flex flex-row min-w-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="bg-[#002A5B] h-32"></div>
        <div className="flex justify-center gap-8">
          <ProfileCard />
          <div className="mx-8 flex-1 sm:m-0 sm:mr-5">
            <div className="py-6">
              <p className="text-sm font-medium opacity-75">
                Monday, 14 October
              </p>
              <p className="font-bold text-[#002A5B] text-2xl">
                Good morning, Prabhleen!👋
              </p>
            </div>
            <div className="md:flex md:justify-between gap-8">
              <div className="md:w-4/12 shadow-md border border-gray-300 rounded-xl h-60 md:m-0 "></div>
              <MeetingScheduleCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
