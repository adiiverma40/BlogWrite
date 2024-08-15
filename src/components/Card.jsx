import React from "react";

function Card({
  children,
  className = "",
  name = "Login Please",
  email,
  registrationDate,
  status,
}) {
  // Create a new Date object
  const date = new Date(registrationDate);

  // Format the date to a readable string
  const readableDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

 

  return (
    <div className={`card ${className}`}>
      <div className="content">
        <div className="top">
          <p>User Info</p>
          <div className="color"></div>
        </div>
        <div className="">
          <div>
            <p className="text-base mx-3 mt-1">Name : {name} </p>
            <p className="text-base mx-3 mt-1">Email : {email} </p>
            <p className="text-base mx-3 mt-1">
              Registration date : {readableDate}{" "}
            </p>
            <p className="text-base mx-3 mt-1">Status : {String(status)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
