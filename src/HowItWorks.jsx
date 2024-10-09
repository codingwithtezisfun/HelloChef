import React from "react";
import "./Styles/howitworks.css";

function HowItWorks() {
  return (
    <>
      <div className="howMain">
        <div className="family"></div>
        <div className="how">
          <h1>How it works</h1>
          <p>
            Simplify home cooking in just 4 easy steps. Get quality ingredients
            & great recipes delivered to your door.
          </p>
          <h5>
            <span>1</span>Select your box
          </h5>
          <h5>
            <span>2</span>Choose your recipes
          </h5>
          <h5>
            <span>3</span>Receive your delivery
          </h5>
          <h5>
            <span>4</span>Cook, eat and enjoy!
          </h5>
          <button>Learn more </button>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
