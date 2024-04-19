/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TickerTape } from "react-tradingview-embed";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Work from "../components/Work/Work";
import Plan from "../components/Plan/Plan";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.jivosite.com/widget/GsHMQTKoAe";

    document.body.appendChild(script);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <TickerTape />
      <About />
      <Start />
      <Work />
      <Reason />
      <Plan />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
