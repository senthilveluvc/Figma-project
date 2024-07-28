import React from "react";
import "./App.css";
import logoSrc from "./assets/FoodieLogo.png";
import phoneImage from "./assets/iphone13-Layout.png";
import videoFile from "./assets/food-reel.mp4";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logoSrc} alt="Foodie Logo" className="logo" />
        <button className="join-button-header">Join the Waitlist</button>
      </header>

      <section>
        <div className="main-content">
          <div className="phone-container">
            <img src={phoneImage} alt="Phone" className="phone-image" />
            <video autoPlay loop muted className="video-content">
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>

          <div className="intro-text">
            <img src={logoSrc} alt="Foodie Logo" className="logo" />
            <h1>Welcome to Foodie</h1>
            <p>
              At Foodie, we redefine convenience with our seamless food delivery
              service. Whether you're craving the flavors of home or exploring
              new culinary delights, Foodie brings it all to your doorstep. From
              hearty breakfasts to gourmet dinners and everything in between,
              our curated menu caters to every palate and preference.
            </p>
            <button className="join-button-main">Join the Waitlist</button>
          </div>
        </div>
      </section>

      <div className="waitlist-section">
        <h2>Join the Waitlist</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="City" />
        </form>
        <button type="submit">Join the Waitlist</button>
      </div>
      <footer>
        <p>©Foodie, 2024</p>
      </footer>
    </div>
  );
};

export default App;
