import React from "react";
import uix from "../assets/images/uix.png";
import reaclate from "../assets/images/reaclate.png";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import '../index.css'

const Footer = () => {
  return (
    <div className="container-fluid bg-white pt-2" >
      <div className="row">
        <div className="col-md-12 text-center text-black py-3">
          <hr/>
        Zagol is the first online art selling website in Ethiopia with high end system. We are a team of young and passionate artists and developers who are working together to make art accessible to everyone. We are also working on a mobile app to make the process even easier.
        </div>
        <hr/>
      </div>
      <div className="row">
        <div className="col-md-4 text-black pt-1">
          © 2023. All Rights Reserved. Designed by
          <a href="https://t.me/uixnature" className="caros text-decoration-none">
            {" "}
            uix Nature
          </a>
        </div>
        <div className="col-md-6 notimpo text-center text-black">
            <span className="px-2">
          Proudly powered by
    </span>
          <a href="https://t.me/uixnature" className="text-black caros">
            <img src={uix} alt="uix" className="img-fluid mb-2" />
          </a>
          <span className="px-2">
          and 
    </span>
          <a href="https://github.com/Reaclate" className="text-black caros">
            <img src={reaclate} alt="reaclate" className="img-fluid mb-2" />
          </a>
        </div>
        <div className="col-md-2 notimpo text-center">
            <img src={linkedin} alt="linkedin" style={{ width: "20%" }} className="px-2" />
            <img src={twitter} alt="twitter" style={{ width: "20%" }} className="px-2"/>
            <img src={medium} alt="medium" style={{ width: "20%" }} className="px-2"/>
            <img src={dev} alt="dev" style={{ width: "20%" }} className="px-2"/> 
          </div>
      </div>
    </div>
  );
};

export default Footer;
