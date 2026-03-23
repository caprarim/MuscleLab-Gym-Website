import React from "react";
import SideBar from "./sidebar.jsx";
import { useNavigate } from "react-router-dom";
import EndBar from "./endBar.jsx";
const About = () => {
  let nav = useNavigate();
  return (
    <>
      <main className="gym-page about-page">
        <SideBar
          click1={() => nav("/About")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section className="about-v2-hero">
          <img
            src="public/musclelabimages/g.jpg"
            className="about-v2-hero-image"
            alt="Muscle Lab training"
          />
          <div className="about-v2-hero-shade" />
        </section>

        <section className="about-v2-main">
          <div className="about-v2-intro">
            <h1 className="about-v2-title">
              Train Hard. <span>Belong</span> Fully.
            </h1>
            <p className="about-v2-subtitle">
              Muscle Lab is a high-performance gym with a human feel. You get
              the intensity of serious training and the support of coaches who
              care about your consistency, form, and long-term progress.
            </p>
          </div>

          <div className="about-v2-feature-row">
            <article className="about-v2-feature">
              <span className="about-v2-feature-icon" aria-hidden="true">
                $
              </span>
              <h2 className="about-v2-feature-title">
                Smart Value Memberships
              </h2>
              <p className="about-v2-feature-text">
                Premium-level environment, expert guidance, and practical plans
                without overpriced packages.
              </p>
            </article>

            <article className="about-v2-feature">
              <span className="about-v2-feature-icon" aria-hidden="true">
                +
              </span>
              <h2 className="about-v2-feature-title">
                Complete Training Floor
              </h2>
              <p className="about-v2-feature-text">
                From heavy strength work to cardio conditioning, every zone is
                built for focused, uninterrupted sessions.
              </p>
            </article>

            <article className="about-v2-feature">
              <span className="about-v2-feature-icon" aria-hidden="true">
                *
              </span>
              <h2 className="about-v2-feature-title">
                Progress You Can Measure
              </h2>
              <p className="about-v2-feature-text">
                Clear structure, weekly discipline, and coaching feedback that
                turns effort into visible results.
              </p>
            </article>
          </div>

          <div className="about-v2-detail-row">
            <article className="about-v2-detail">
              <h3 className="about-v2-detail-title">Mission</h3>
              <p className="about-v2-detail-text">
                Our mission is to build stronger bodies and stronger routines by
                combining focused programs with disciplined coaching.
              </p>
            </article>

            <article className="about-v2-detail">
              <h3 className="about-v2-detail-title">Services</h3>
              <p className="about-v2-detail-text">
                We offer strength and cardio facilities, one-on-one coaching,
                and guided group sessions for steady, sustainable
                transformation.
              </p>
            </article>

            <article className="about-v2-detail">
              <h3 className="about-v2-detail-title">Target Audience</h3>
              <p className="about-v2-detail-text">
                Perfect for beginners, intermediate lifters, and athletes who
                want better performance, body composition, and training quality.
              </p>
            </article>
          </div>
        </section>
      </main>
      <EndBar />
    </>
  );
};

export default About;
