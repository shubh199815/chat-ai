import { useState } from 'react';
import Hamburger from './common/Buttons/Hamburger';
import Sidebar from './Sidebar';

function NavigationBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Top Navigation Bar for Mobile/Tablet */}
            <nav className="flex justify-between items-center px-4 py-3 bg-white border-b border-neutral-200 lg:hidden w-full">
                <span className="font-bold text-lg text-neutral-900">Chat AI</span>
                <Hamburger onClick={toggleSidebar} />
            </nav>

            {/* Sidebar Overlay for Mobile/Tablet */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar for Mobile/Tablet */}
            {isSidebarOpen && (
                <Sidebar isMobile onClose={toggleSidebar} />
            )}
        </>
    );
}

export default NavigationBar;