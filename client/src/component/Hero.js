import React from "react";
import Header from "./Header";
function Hero() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-container">
          <div className="flex padding">
            <div className="hero-col-1 margin">
              <h2>
                Best Balloon Decorators Surprise party decorations Romantic
                decorations
              </h2>
              <p>
                Event Management Company Open 24 hours Help people to organise
                Events
              </p>
            </div>
            <div className="hero-col-2 margin">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" />
            </div>
          </div>
          <div className="subscribe_letter ">
            <button className="btn call-btn">call 01897-123456</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
