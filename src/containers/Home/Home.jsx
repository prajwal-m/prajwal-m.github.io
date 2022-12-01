import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero-content">
        <h1 className="heading-primary ">
          Hi, I'm <span className="typing-demo">Prajwal</span>
        </h1>
        <div className="home-hero-info">
          <p className="text-primary">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
