import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-heading">About Movie Hub</h1>

        <p className="about-para">
          Welcome to <span>Movie Hub</span>, your ultimate destination for
          discovering the latest and greatest in the world of movies and TV
          shows. We bring you curated recommendations, trending content,
          and detailed insights into your favorite entertainment.
        </p>

        <div className="about-btn">
          <NavLink to="/movie" className="explore-btn">
          <i class="fa-solid fa-clapperboard"></i> Explore Movies
          </NavLink>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3><i class="fa-solid fa-clapperboard"></i> Latest Movies</h3>
            <p>
              Explore newly released blockbusters and timeless classics all
              in one place.
            </p>
          </div>

          <div className="about-card">
            <h3><i class="fa-solid fa-fire"></i> Trending Shows</h3>
            <p>
              Stay updated with trending series and must-watch drama content.
            </p>
          </div>

          <div className="about-card">
            <h3><i class="fa-solid fa-star"></i> Honest Reviews</h3>
            <p>
              Read ratings and reviews to help you decide what to watch next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};