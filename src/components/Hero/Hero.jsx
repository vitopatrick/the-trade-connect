import React from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/img/bg-img.jpeg)",
          height: "70vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero__overlay">
          <div className="container py-5">
            {/* header CTA */}
            <div className="p-5">
              <h4 className="text-white font-weight-bold fs-1 fw-bolder">
                The Most Reliable <br /> Crypto App
              </h4>
              <p className="text-white">
                Buy, store, swap and spend cryptocurrency all in one app. <br />{" "}
                Turn Bitcoin into dollars with the BitPay crypto debit card.
                Earn cash back automatically.
              </p>
              <div className="mt-4">
                <Link to="/register" className="bg-white p-3 rounded me-4">
                  Register today
                </Link>
                <a
                  className=" bg-primary p-3 rounded text-white"
                  href="https://play.google.com/store/apps/details?id=com.bitpay.wallet&hl=en&gl=US"
                >
                  Get the App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
