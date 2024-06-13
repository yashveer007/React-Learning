import React from "react";

export default function Button({ text,
  type,
  className,
  ...props
 }) {
  return (
    <div>
      <button 
        type={type}
        className={`${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
}
