import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from './pages/MainLayout';
import AuthPage from './pages/AuthPage';

function App() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout isMobileOrTablet={isMobileOrTablet} />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </Router>
    );
}

export default App;
