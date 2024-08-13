import React from 'react';

function Button({
    type="button",
    children,
    className="",
    ...props
}) {
  return (
   <button className='bg-blue-500 border-white rounded p-2 m-4  text-white' type={type} {...props}>{children}</button>
  );
}

export default Button;