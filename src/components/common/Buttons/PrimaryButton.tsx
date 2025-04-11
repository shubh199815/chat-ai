interface PrimaryButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export default function PrimaryButton({
    onClick,
    disabled,
}: PrimaryButtonProps) {
    return (
        <div
            className="w-10 flex items-center gap-2 p-2.5 rounded bg-indigo-700 hover:bg-indigo-800"
            onClick={onClick}
            aria-disabled={disabled}
        >
            <div className="w-5 h-5">
                <div className="w-[16.666667938232422px] h-[16.666667938232422px]">
                    <svg className="w-[13.515689849853516px] h-[14.797789573669434px] text-indigo-50"></svg>
                </div>
            </div>
        </div>
    );
}
