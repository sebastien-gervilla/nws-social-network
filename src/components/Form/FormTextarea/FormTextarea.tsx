import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface FormTextareaProps {
    label?: string,
    name: string,
    type?: InputType,
    fieldType?: string,
    value: string,
    onChange: (name: string, value: string) => void,
    placeholder?: string,
    hasError?: boolean,
    validator?: string, // ValidationFunction
    widget?: JSX.Element,
    isDark?: boolean,
    disabled?: boolean
}

const FormTextarea = ({
    label,
    name,
    type = 'text',
    fieldType = type,
    value,
    onChange,
    placeholder,
    hasError = false,
    validator = '',
    widget,
    isDark,
    disabled = false
}: FormTextareaProps) => {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => onChange(name, event.target.value);

    return (
        <div className="form-field">
            {label ? <p className="label">{label}</p> : null}
            <div className={
                "input-wrapper " + fieldType +
                (hasError ? ' error' : '') +
                (isDark ? ' dark' : ' light') +
                (disabled ? ' disabled' : '')
            }>
                <textarea
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className='animated'
                    disabled={disabled}
                />
                {!!widget &&
                    <div className="widget">
                        {widget}
                    </div>}
            </div>
            <p className='validator'>{validator}</p>
        </div>
    )
}

type InputType = HTMLInputTypeAttribute;

export default FormTextarea;