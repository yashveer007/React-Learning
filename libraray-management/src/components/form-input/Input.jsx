import React, { useId,forwardRef } from "react";

export default forwardRef(function Input({
  type,
  label,
  name,
  value,
  placeholder,
  className = "",
  onChange,
  ...props
},ref) {
    const id = useId();
  return (
    <div>
      <label> {label}</label>
      <input 
        type={type}
        placeholder= {placeholder}
        name={name}
        value={value}
        className={` ${className}`}
        ref={ref}
        id={id}
        onChange={onChange}
        {...props}
    />
    </div>
  );
});
