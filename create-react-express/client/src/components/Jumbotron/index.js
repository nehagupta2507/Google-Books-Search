import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "rgb(178,180,53)" }}
      className="jumbotron"
    >
      <img src="./bookLogo.jpeg" alt="google-logo" style={{ height: "150px" }} />
    </div>
  );
}

export default Jumbotron;