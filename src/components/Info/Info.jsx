import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__title">
          <h1 className="fw-bolder ">About the trade connect</h1>
        </div>
        <div className="info__about">
          <p className="text-muted">
            the trade connect is one of the leading cryptocurrency mining platforms,
            offering cryptocurrency mining capacities in every range - for
            newcomers. Our mission is to make acquiring cryptocurrencies easy
            and fast for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
