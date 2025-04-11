import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';

function App() {
    return (
        <div className="landing-page w-[100vw] h-[100vh] flex bg-white overflow-hidden">
            <Sidebar />
            <ChatSection />
        </div>
    );
}

export default App;
