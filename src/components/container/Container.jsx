import React from "react";

function Container({ children, font = "fraunces", font_size = "18px" ,bgColor }) {
  return (
    <div
      className={`w-full ${font}  `}
      style={{ fontSize: font_size , height : "84.5vh"
        , background : `rgba(${bgColor})`
      }}
    >
      {children}
    </div>
  );
}

export default Container;
