import React from "react";
import { useNavigate } from "react-router-dom";

const EndBar = () => {
  const assetBase = import.meta.env.BASE_URL;
  const nav = useNavigate();

  return (
    <footer className="socials-container">
      <div className="footer-brand">
        <img
          className="footer-brand-logo"
          src={`${assetBase}.jpg`}
          alt="Muscle Lab Gym crest"
        />
        <p className="footer-brand-tagline">
          Muscle Lab Gym. Built For Size, Strength, And Discipline
        </p>
      </div>

      <div className="footer-grid">
        <section className="footer-column">
          <h2 className="footer-column-title">Contact Us</h2>
          <p className="footer-column-text">
            Sector 11-A North Karachi, Pakistan
          </p>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">Plans</h2>
          <div
            className="footer-column-link"
            onClick={() => nav("/memberships")}
          >
            Membership Plans
          </div>
          <a className="footer-column-link" href="">
            Trial Session
          </a>
          <a className="footer-column-link" href="">
            Classes
          </a>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">Performance</h2>
          <div
            className="footer-column-link"
            onClick={() => nav("/memberships")}
          >
            Register
          </div>
          <a className="footer-column-link" href="">
            Personal Training
          </a>
          <a className="footer-column-link" href="">
            Nutrition Plan
          </a>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">Socials</h2>
          <a className="footer-column-link" href="https://www.instagram.com/">
            Instagram
          </a>
          <a className="footer-column-link" href="">
            YouTube
          </a>
          <a className="footer-column-link" href="">
            Facebook
          </a>
        </section>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom-row">
        <p className="footer-social-strip">IG FB YT IN</p>
        <p className="footer-copyright">
          Copyright © 2026 Muscle Lab Gym. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default EndBar;
