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
          alt="Muscle Lab Gym crest"
          src={`${assetBase}muscle.jpg`}
          onClick={() => nav("/")}
        />

        <div className="footer-brand-copy">
          <p className="footer-brand-eyebrow">Muscle Lab Gym</p>
          <p className="footer-brand-tagline">LARGEST GYM IN NORTH KARACHI</p>
        </div>
      </div>

      <div className="footer-grid">
        <section className="footer-column">
          <h2 className="footer-column-title">Contact Us</h2>
          <p className="footer-column-text">
            Sector 11-A, North Karachi <br /> Phone number: 03132424126
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
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">Start Here</h2>
          <div
            className="footer-column-link"
            onClick={() => nav("/memberships")}
          >
            Register
          </div>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">Socials</h2>
          <a className="footer-column-link" href="https://www.instagram.com/">
            Instagram
          </a>
        </section>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom-row">
        <p className="footer-social-strip">North Karachi, Pakistan</p>
        <p className="footer-copyright">
          Copyright © 2026 Muscle Lab Gym. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default EndBar;
