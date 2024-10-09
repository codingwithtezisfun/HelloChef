import React from "react";
import "./Styles/whyus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import variety from "../public/variety.webp";
import box from "../public/box_over.webp";
import salmon from "../public/salmon_katsu.webp";
import { FaCheck } from "react-icons/fa6";

function WhyUs() {
  return (
    <>
      <div className="mainContainer container">
        <div className="text">
          <h2>Why choose us?</h2>
          <p>
            Eat well for less with impressively easy meals starting from AED 35
            per serving.
          </p>
        </div>
        <div className="whyContent">
          <div className="jumbotron">
            <img className="img" src={box} alt="convenience" />
            <div className="jumbotronText">
              <h1>Convenience</h1>
              <p>
                <FaCheck className="check" />
                Pre-measured ingredients & easy recipes
              </p>
              <p>
                <FaCheck className="check" />
                Contactless, doorstep delivery across UAE
              </p>
              <p>
                <FaCheck className="check" />
                Skip a delivery or cancel anytime
              </p>
            </div>
          </div>
          <div className="jumbotron">
            <img className="img" src={variety} alt="variety" />
            <div className="jumbotronText">
              <h1>Variety</h1>
              <p>
                <FaCheck className="check" />
                New recipes every week
              </p>
              <p>
                <FaCheck className="check" />
                34+ dishes to choose from
              </p>
              <p>
                <FaCheck className="check" />
                Low-calorie & family-friendly options
              </p>
            </div>
          </div>
          <div className="jumbotron">
            <img className="img" src={salmon} alt="deliciousness" />
            <div className="jumbotronText">
              <h1>Deliciousness</h1>
              <p>
                <FaCheck className="check" />
                No skimpin' on the portion size!
              </p>
              <p>
                <FaCheck className="check" />
                100% satisfaction guarantee, or we will make it right
              </p>
              <p>
                <FaCheck className="check" />
                Fresh ingredients from local, trusted suppliers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
