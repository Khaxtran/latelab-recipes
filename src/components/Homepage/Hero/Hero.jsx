import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container hero is-medium">
      <div className="hero-title hero-body">
        <div className="title-container">
          <h1>
            BAKING IS <span className="add-weight">LOVE</span> MADE{" "}
            <span className="add-weight">EDIBLE</span>
          </h1>

          <figure className="image is-128x128 ml-6 mb-5">
            <img
              className="cyan-cake"
              src="assets/cyan-cake.png"
              alt="cyan-cake"
            />
          </figure>
        </div>

        <div className="title-container mt-2">
          <h1>
            Unforgettable <span className="add-weight-2">Sweetness</span>{" "}
          </h1>

          <figure className="image is-128x128 mx-3 p-2">
            <img
              className="white-cake"
              src="assets/white-cake.png"
              alt="white-cake"
            />
          </figure>
          <h1> You'll Keep Craving For.</h1>
        </div>

        <div className="columns m-6 p-6 is-vcentered">
          <div className="column text-description">
            <p>
              Cake is often served as a celebratory dish on ceremonial
              occasions, such as weddings, anniversaries, and birthdays. There
              are countless cake recipes; some are bread-like, some are rich and
              elaborate, and many are centuries old.
            </p>
          </div>
          <div className="column">
            <figure className="image birthday-cake">
                <img src="assets/birthday-cake.png" alt="birthday-cake" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
