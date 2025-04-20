import ChatSection from "../components/ChatSection";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
    isMobileOrTablet: boolean;
}

const MainLayout = ({isMobileOrTablet}: MainLayoutProps) => (
    <div
        className={`landing-page w-[100vw] h-[100vh] flex bg-white overflow-scroll ${
            isMobileOrTablet ? 'flex-col' : 'flex-row'
        }`}
    >
        {isMobileOrTablet && <NavigationBar />}
        {!isMobileOrTablet && <Sidebar />}
        <div className="flex flex-grow">
            <ChatSection />
        </div>
    </div>
);

export default MainLayout;
