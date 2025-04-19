interface HamburgerProps {
    onClick?: () => void;
    disabled?: boolean;
}

export default function Hamburger({ onClick, disabled }: HamburgerProps) {
    return (
        <button
            className="flex bg-white justify-center items-center gap-2 rounded focus:outline-none focus:ring-1 focus:ring-primary-50"
            onClick={onClick}
            aria-disabled={disabled}
            aria-label="Toggle navigation"
        >
            <svg
                className="w-6 h-6 text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
        </button>
    );
}
