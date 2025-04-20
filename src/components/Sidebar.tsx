import SecondaryButton from './common/Buttons/SecondaryButton';
import { RiChatVoiceAiFill } from "react-icons/ri";

interface SidebarProps {
    isMobile?: boolean;
    isOpen?: boolean; // New prop to control animation state
    onClose?: () => void;
}

function Sidebar({ isMobile = false, isOpen = false, onClose }: SidebarProps) {
    return (
        <>
            <aside
                className={`${
                    isMobile
                        ? `fixed inset-y-0 left-0 z-40 w-60 bg-white px-4 py-6 transform transition-transform duration-300 ${
                              isOpen ? 'translate-x-0' : '-translate-x-full'
                          }`
                        : 'hidden md:flex'
                } px-4 py-6 flex-col w-full max-w-[240px] bg-white border-r border-neutral-200 md:w-60`}
            >
                {/* Header Section */}
                <header className="flex justify-between items-center px-4 py-3 bg-white sticky top-0 z-10">
                    <div className="flex gap-1 items-center">
                        <RiChatVoiceAiFill color='#4338ca' title='Chat AI' size={'20px'} />
                        <span className="font-bold text-base text-neutral-900 tracking-tighter">Chat AI</span>
                    </div>
                    {isMobile && (
                        <button
                            className="w-4 h-4 p-0 bg-white text-neutral-900"
                            aria-label="Close sidebar"
                            onClick={onClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    )}
                </header>

                {/* Ongoing Prompt Section */}
                <section className="flex flex-col gap-4 grow mb-6 overflow-y-auto px-4 py-3">
                    <div className="bg-neutral-50 rounded p-3">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5">
                                <svg
                                    className="w-5 h-5 text-indigo-700"
                                    aria-hidden="true"
                                    focusable="false"
                                ></svg>
                            </div>
                            <span className="font-medium text-sm text-indigo-700">
                                Ongoing prompt
                            </span>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="flex flex-col gap-4 px-4 py-3 bg-white sticky bottom-0 z-10">
                    <SecondaryButton />
                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                        <div className="mb-4">
                            <h2 className="font-medium text-sm text-neutral-900">
                                Let’s create an account
                            </h2>
                            <p className="font-normal text-xs text-neutral-600">
                                Save your chat history, share chat, and personalize your experience.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button
                                className="w-full bg-indigo-700 text-white font-medium text-sm py-2 rounded"
                                aria-label="Sign in"
                            >
                                Sign in
                            </button>
                            <button
                                className="w-full bg-transparent text-indigo-700 font-medium text-sm py-2 rounded border border-indigo-700"
                                aria-label="Create account"
                            >
                                Create account
                            </button>
                        </div>
                    </div>
                </footer>
            </aside>
        </>
    );
}

export default Sidebar;
