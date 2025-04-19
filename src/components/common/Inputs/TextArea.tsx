import React from 'react';

interface TextAreaProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    cols?: number;
    className?: string;
    label?: string;
    id: string;
    error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
    value,
    onChange,
    placeholder = '',
    rows = 4,
    cols = 50,
    className = '',
    label,
    id,
    error,
}) => {
    return (
        <div className="flex flex-col gap-1.5 w-full max-w-md">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-neutral-700">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                className={`textarea ${className} font-normal text-sm bg-neutral-50 text-neutral-500 border border-solid rounded px-3.5 py-2 w-full ${
                    error ? 'border-red-500' : 'border-neutral-200'
                } focus:outline-none focus:ring-2 focus:ring-primary-50`}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && (
                <span id={`${id}-error`} className="text-xs text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextArea;