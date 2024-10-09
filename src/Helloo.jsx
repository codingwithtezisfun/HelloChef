import React from "react";
import "./Styles/hello.css";
import igLogo from "../public/instagram_logo_2016.svg.webp";
import ashley from "../public/ashley_dxb.webp";
import aysha from "../public/ayshasaiha.webp";
import shrimp from "../public/shrimply.webp";
import credit from "../public/dxblivin-credit.webp";
import stars from "../public/rating_star-removebg-preview.png";
import google from "../public/google logo.png";
import medal from "../public/medal-solid.svg";
import certified from "../public/B-certified.jpg";

function Helloo() {
  return (
    <>
      <div className="helloContainer">
        <div className="ig">
          <img src={igLogo} alt="iglogo" />
          <a href="">#hellochef</a>
        </div>
        <div className="imgs">
          <img src={credit} alt="" />
          <img src={aysha} alt="" />
          <img src={shrimp} alt="" />
          <img src={ashley} alt="" />
        </div>
        <div className="helloText">
          <div className="txt">
            <h3>
              Over <span>3 million meals</span>
            </h3>
            <h3>Cooked and loved by our customers</h3>
          </div>
          <div className="review">
            <h7>4.9 </h7>
            <img src={stars} alt="" />
            <h7>350+ reviews on</h7>
            <img src={google} alt="" />
          </div>
        </div>
        <div className="helloFooter">
          <div className="medal">
            <img src={medal} alt="" />
          </div>
          <div className="footerText">
            <div className="top">
              <h4>
                Hello chef is a certified <span>B corp!</span>
              </h4>
              <button className="btnn">new</button>
            </div>

            <p>
              we're proud to join a global movement of companies using business
            </p>
            <p>
              as a force for good. <a href="">learn more </a>
            </p>
          </div>
          <div className="cert">
            <img src={certified} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Helloo;
