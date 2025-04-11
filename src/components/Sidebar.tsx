// import './Sidebar.css';

import Link from './common/Buttons/Link';

function Sidebar() {
    return (
        <div className="flex flex-col self-stretch w-60 bg-white px-4 py-6 border-solid border-neutral-200">
            <div className="flex justify-between items-center self-stretch px-1 py-4">
                <div className="w-[86px] flex">
                    <div className="w-[86px] h-8">
                        <div className="w-[52px] h-8">
                            <span className="font-bold text-base text-neutral-900">
                                Chat AI
                            </span>
                        </div>
                        <div className="flex">
                            <div className="w-8 h-8 rounded-lg"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 rounded opacity-0">
                    <div className="w-5 h-5">
                        <div className="w-[16.666667938232422px] h-[16.666667938232422px]">
                            <svg className="w-[8.838805198669434px] h-[8.838805198669434px] text-neutral-600"></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 self-stretch grow">
                <div className="flex flex-col gap-3 self-stretch grow">
                    <div className="flex flex-col self-stretch bg-neutral-50 rounded">
                        <div className="flex items-center gap-2 self-stretch p-1.5 rounded-tr-lg rounded-br-lg">
                            <div className="flex items-center gap-3 grow">
                                <div className="w-5 h-5">
                                    <svg className="w-[14.166666030883789px] h-5 text-indigo-700"></svg>
                                </div>
                                <span className="font-medium text-xs text-indigo-700">
                                    Ongoing prompt
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 self-stretch">
                <Link disabled={false} />
                <div className="flex flex-col gap-6 self-stretch bg-white p-4 rounded-lg border border-solid border-neutral-200">
                    <div className="flex flex-col gap-1 self-stretch">
                        <div className="flex items-center self-stretch">
                            <span className="font-medium text-sm text-neutral-900">
                                Let’s create an account
                            </span>
                        </div>
                        <span className="font-normal text-xs text-neutral-600">
                            Save your chat history, share chat, and personalize
                            your experience.
                        </span>
                    </div>
                    <div className="flex flex-col gap-1 self-stretch">
                        <div className="flex justify-center items-center gap-1 self-stretch bg-indigo-700 px-3 py-2 rounded">
                            <div className="flex justify-center items-center px-0.5">
                                <span className="font-medium text-sm text-white">
                                    Sign in
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1 self-stretch px-3 py-2 rounded">
                            <div className="flex justify-center items-center px-0.5">
                                <span className="font-medium text-sm text-indigo-700">
                                    Create account
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
