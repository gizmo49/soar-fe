import { ChangeEvent, FocusEvent } from 'react';
import './Input.scss';

interface InputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}

const Input = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    onBlur,
    error,
    placeholder,
    disabled = false,
}: InputProps) => {
    return (
        <div className="settings-input">
            <label htmlFor={name} className="settings-input__label">
                {label}
                {/* {required && <span className="settings-input__required">*</span>} */}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                className={`settings-input__field ${error ? 'settings-input__field--error' : ''}`}
            />
            {error && <span className="settings-input__error">{error}</span>}
        </div>
    );
};

export default Input;