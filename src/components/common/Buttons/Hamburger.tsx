interface HamburgerProps {
    onClick?: () => void;
    disabled?: boolean;
}

export default function Hamburger({ onClick, disabled }: HamburgerProps) {
    return (
        <div
            className="flex justify-center items-center gap-2 rounded"
            onClick={onClick}
            aria-disabled={disabled}
        >
            <div className="w-6 h-6">
                <div className="w-5 h-5">
                    <svg
                        className="w-[15px] h-[13.333333015441895px] text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
