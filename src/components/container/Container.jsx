import React from "react";

function Container({ flex, display,children, font = "fraunces", font_size = "18px" ,bgColor }) {
  return (
    <div
      className={`w-full ${font} justify-center items-center `}
      style={{ fontSize: font_size , height : "100vh"
        , background : `rgba(${bgColor})`,
        display: display,
        flexWrap:flex
      }}
    >
      {children}
    </div>
  );
}

export default Container;
