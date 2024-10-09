import React from "react";
import "./Styles/subscribe.css";

function Subscribee() {
  return (
    <>
      <div className="subContainer">
        <div className="sub">
          <h2>Hungry for more?</h2>
          <p>
            Sign up to our newsletter for exciting updates and weekly recipe
            inspiration, delivered straight to your inbox.
          </p>
          <div>
            <div className="input">
              <p>Email address</p>
              <input type="text" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="p">
          <p>
            We are a weekly meal subscription service based in Dubai, delivering
            pre-portioned ingredients and easy-to-follow recipe cards across the
            UAE. Our healthy meal delivery service means you can say goodbye to
            stressful meal planning and instead, spend time enjoying delicious
            food with loved ones. Our pre-measured, ready-to-cook boxes make it
            easier than ever for you to discover new flavours every week.
          </p>
        </div>
      </div>
    </>
  );
}

export default Subscribee;
