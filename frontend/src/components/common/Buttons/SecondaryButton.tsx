import classNames from 'classnames';
import SparkleIcon from '../Vectors/SparkleIcon';

interface SecondaryButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    label?: string;
}

export default function SecondaryButton({
    onClick,
    disabled = false,
    label = 'Start new chat',
}: SecondaryButtonProps) {
    return (
        <button
            type="button"
            className={classNames(
                'flex items-center gap-1 px-3.5 py-2.5 rounded border-[0.5px] border-solid focus:outline-none shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]',
                {
                    'bg-white border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 focus:ring-2 focus:ring-[#e5e5e5] cursor-pointer':
                        !disabled,
                    'bg-neutral-100 border-neutral-300 text-neutral-400 cursor-not-allowed':
                        disabled,
                },
            )}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            aria-disabled={disabled}
        >
            <SparkleIcon disabled={disabled} colorClass="fill-secondary-600" />
            <span
                className={classNames('font-medium text-sm', {
                    'text-neutral-900': !disabled,
                    'text-neutral-400': disabled,
                })}
            >
                {label}
            </span>
        </button>
    );
}
