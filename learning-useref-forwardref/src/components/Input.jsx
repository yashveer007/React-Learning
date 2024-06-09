import React, { useId,forwardRef } from 'react'

function Input({
    type = "text",
    name,
    value,
    placeholder,
    label,
    className = "",
    onChange,
    ...props
},ref) {
    const id = useId();
    return (
        <div>
            {label && <label>{label}</label>}
            <input type={type}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                className={`&{className}`}
                onChange={onChange}
                {...props}
                ref={ref}
            />
        </div>
    )
}

export default forwardRef(Input)