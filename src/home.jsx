import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import EndBar from "./endBar.jsx";
const Home = () => {
  const assetBase = import.meta.env.BASE_URL;
  let [isModalDisplay, setModalDisplay] = useState(true);
  let nav = useNavigate();

  function joinGym() {
    setModalDisplay(false);
    nav("/memberships");
  }

  function nav2Abt() {
    nav("/about");
  }

  function removeModalDisplay() {
    setModalDisplay(false);
  }
  return (
    <>
      <main className="gym-page home-page">
        <section
          className="home-entry-modal"
          aria-label="Join Muscle Lab Gym"
          style={isModalDisplay ? { display: "grid" } : { display: "none" }}
          onClick={removeModalDisplay}
        >
          <div className="home-entry-modal-backdrop" />
          <div
            className="home-entry-modal-shell"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="home-entry-modal-close"
              aria-label="Close modal"
              onClick={removeModalDisplay}
            >
              +
            </button>

            <div className="home-entry-modal-brand">
              <img
                src={`${assetBase}muscle.jpg`}
                alt="Muscle Lab Gym crest"
                className="home-entry-modal-logo"
              />
              <p className="home-entry-modal-brandline">
                Discipline. Size. Fire.
              </p>
            </div>

            <div className="home-entry-modal-divider" />

            <div className="home-entry-modal-copy">
              <p className="home-entry-modal-kicker">Built For Real Work</p>
              <h2 className="home-entry-modal-title">JOIN THE MOVEMENT</h2>
              <p className="home-entry-modal-subtitle">
                Train hard. Look dangerous.
              </p>
              <p className="home-entry-modal-text">
                Step into Muscle Lab Gym for elite equipment, serious energy,
                and a training floor that pushes you to show up stronger every
                week.
              </p>

              <div className="home-entry-modal-actions">
                <button
                  type="button"
                  className="home-entry-modal-primary"
                  onClick={joinGym}
                >
                  Join Muscle Lab Gym Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <SideBar
          click1={nav2Abt}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/Memberships")}
        ></SideBar>
        <section className="gym-hero">
          <h1 className="gym-title">
            <img
              src={`public/baki2.png`}
              className="cool-pic-baki"
              alt="Baki"
            />
            <span className="gym-title-accent">Muscle Lab</span> Gym
          </h1>
        </section>

        <section className="home-promo">
          <div className="home-promo-copy">
            <p className="home-promo-kicker">Become A Stronger You</p>
            <h2 className="home-promo-title">Join Muscle Lab Gym Today</h2>
            <button type="button" className="home-promo-cta" onClick={joinGym}>
              Register Now
            </button>
            <p className="home-promo-subtext">
              Push past limits, train with intention, and build the physique you
              have been promising yourself.
            </p>
          </div>

          <div className="home-promo-video-wrap">
            <video
              src={`${assetBase}workout2.mp4`}
              className="home-promo-video"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        </section>
        <EndBar />
      </main>
    </>
  );
};

export default Home;
