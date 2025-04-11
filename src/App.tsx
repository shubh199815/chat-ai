import './App.css';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';

function App() {
    return (
        <div className="landing-page w-[1440px] h-[768px] flex bg-white">
            <Sidebar />
            <ChatSection />
        </div>
    );
}

export default App;
