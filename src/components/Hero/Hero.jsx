import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url('/img/the trade connect.png')",
          height: "70dvh",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero__overlay">
          <div className="container py-5">
            {/* header CTA */}
            <div>
              <h4 className="text-white font-weight-bold fs-1 fw-bolder">
                The Most Reliable <br /> Crypto App
              </h4>
              <p className="text-white">
                Buy, store, swap and spend cryptocurrency all in one app. <br />{" "}
                Turn Bitcoin into dollars with the the trade connect crypto debit card.
                Earn cash back automatically.
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row">
                <Link
                  to="/register"
                  className="bg-white p-3 rounded me-4 flex-fill"
                >
                  Register today
                </Link>
                <a
                  className=" bg-primary p-3 rounded text-white flex-fill mt-4 mt-sm-0"
                  href="https://play.google.com/store/apps/details?id=com.the trade connect.wallet&hl=en&gl=US"
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
