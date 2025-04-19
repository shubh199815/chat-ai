import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import NavigationBar from './components/NavigationBar';
import { useEffect, useState } from 'react';

function App() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768); // Adjusted to "<= 768" for proper breakpoint handling
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
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
}

export default App;
