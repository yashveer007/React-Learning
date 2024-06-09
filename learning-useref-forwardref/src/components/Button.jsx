import React from 'react'

function Button({
    text,
    type = "submit",
    ...props
}) {
  return (
    <div>
        <button {...props}>{text}</button>
    </div>
  )
}

export default Button