import React, { useEffect } from "react";
import "./sample.css";
import treasure from "./images/treasure.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={treasure} alt="" />
        <a
          href="https://konfhub.com/technovate2024#tickets"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register">Register Now</div>
        </a>
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>
      {/* <div></div> */}
      <div className="about0">
        NO Rulebook found!
      </div>
    </>
  );
}

export default Sample;
