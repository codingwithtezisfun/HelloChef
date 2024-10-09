import React from "react";
import "./Styles/main.css";
import img1 from "../public/vegan.webp";
import img2 from "../public/weekly_classic.webp";
import img3 from "../public/vegetarian.webp";

const Menu = () => {
  return (
    <>
      <div className="mainMenu">
        <div className="menuText">
          <h1>Ready to cook healthy & inspiring meals?</h1>
          <p>
            Choose from 34+ recipes every week - from light, low-calorie dishes
            to hearty, family favourites.
          </p>
          <p>
            Look out for our handy recipe tags to make choosing even simpler.
          </p>
        </div>
        <div className="menuMenu">
          <div className="images img1">
            <h5 className="h5">Vegan</h5>
          </div>
          <div className="images img2">
            <h5 className="h5">Weekly Classic</h5>
          </div>
          <div className="images img3">
            <h5 className="h5">Vegetarian</h5>
          </div>
        </div>
        <div>
          <button className="menuButton">View Menu</button>
        </div>
      </div>
    </>
  );
};

export default Menu;
