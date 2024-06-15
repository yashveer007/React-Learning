import React from "react";

export default function Button({ text,
  type,
  className,
  onClick,
  ...props
 }) {
  return (
    <div>
      <button 
        type={type}
        className={`rounded-md py-2 ${className}`}
        onClick={onClick}
        {...props}
      >
        {text}
      </button>
    </div>
  );
}
