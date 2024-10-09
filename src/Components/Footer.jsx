import React from "react";
import "../Styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import logo from "../../public/logo.svg";
import stars from "../../public/rating_star-removebg-preview.png";
import google from "../../public/g.png";

function Footer() {
  return (
    <>
      <div className="Footer container">
        <div className="imgss">
          <img
            src={logo}
            alt="image"
            style={{ width: "150px", height: "70px" }}
          />
        </div>
        <div className="top">
          <div className="About">
            <ul>
              <li>
                <h5>About Us</h5>
              </li>
              <li>
                <a href="#our-plans">Our Plans</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                <h5>More Info</h5>
              </li>
              <li>
                <a href="#sustainability">Sustainability</a>
              </li>
              <li>
                <a href="#b-corp">B Corp</a>
              </li>
              <li>
                <a href="#help-center">Help Center</a>
              </li>
            </ul>
          </div>
          <div className="work">
            <ul>
              <li>
                <h5>Work with Us</h5>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#affiliate-program">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <ul>
              <h5>Contact Us</h5>
              <li>hello@hellochef.me</li>
              <li>073476734</li>
            </ul>
          </div>
        </div>
        <div className="footerInfo">
          <div className="subscribe">
            <h5>Subscribe to our news letter</h5>
            <label>Enter your email</label>
            <div className="input">
              <input type="text" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="reviews">
            <h5>See our google reviews</h5>
            <img
              src={stars}
              alt="reviews"
              style={{ width: "120px", height: "70px" }}
            />
            <img
              src={google}
              alt=""
              style={{ width: "30px", height: "40px" }}
            />
          </div>
          <div className="icons">
            <h5>Follow us on</h5>
            <div className="iconLinks">
              <a className="icon" href="">
                <FaFacebookF />
              </a>
              <a className="icon" href="">
                <FaInstagram />
              </a>
              <a className="icon" href="">
                <FaYoutube />
              </a>
              <a className="icon" href="">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h5>Made with for UAE</h5>
          <p>
            &copy; copyright 2024 Hello chef All Rights reserved.
            <a href="">Public policies and statements</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
